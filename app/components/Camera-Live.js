import React from 'react-native';
import Camera from 'react-native-camera';
import Button from './Button';
import NavigationBar from 'react-native-navbar';
import RestaurantSelection from './Restaurant-Selection';
import CameraLiveButton from './Button-Camera';
import CameraCrop from './Camera-Crop';
import { Icon } from 'react-native-icons';
import Colors from '../../globalVariables';
import Dimensions from 'Dimensions';

var {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
  ActivityIndicatorIOS,
  PixelRatio,
  NativeModules,
  Modal
} = React;

var deviceScreen = Dimensions.get('window');
var fullWidth = deviceScreen.width;
var fullHeight = deviceScreen.height;

class CameraLive extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      cameraType: Camera.constants.Type.back,
      measuredSize: {
        width: fullWidth,
        height: fullWidth + 55,
      },
      isCroppingPhoto: false,
      imageFrom: 'Camera',
      image: null,
    };
  }

  goToRestaurantSelection(props) {
    this.props.navigator.push({
      component: RestaurantSelection,
      props,
      navigationBar: (
        <NavigationBar
          title="Where are you at?" />
      )
    });
    this.setState({
      loading: false,
    });
    this.handleOverlayClose();
  }

  handleOverlayClose() {
    this.setState({
      isCroppingPhoto: false
    });
  }

  switchCamera() {
    var state = this.state;
    state.cameraType = state.cameraType === Camera.constants.Type.back
      ? Camera.constants.Type.front : Camera.constants.Type.back;
    this.setState(state);
  }

  takePicture() {
    this.refs.cam.capture((err, data) => {
      this.setState({
        isCroppingPhoto: true,
        image: {
          uri: data,
          type: 'file',
          width: fullWidth,
          height: fullWidth + 55,
        }
      })
    });
  }

  setStage(stage){
    this.setState({
      stage: stage
    })
  }

  previousScreen() {
    this.props.navigator.pop()
  }

  render() {

    return (
      <View style={styles.container}>
        <CameraCrop
          isVisible={this.state.isCroppingPhoto}
          image={this.state.image}
          imageFrom={this.state.imageFrom}
          //measuredSize={this.state.measuredSize}
          onPhotoAccept={this.goToRestaurantSelection.bind(this)}
          onOverlayClose={this.handleOverlayClose.bind(this)} />


        <View style={{flex: 1}}>
          <View style={styles.cameraTop}>
            <View stlye={styles.cameraLeftIconContainer}>
              <TouchableOpacity
                  underlayColor='transparent'
                  onPress={this.previousScreen.bind(this)}
                  style={styles.cameraTopCancel}>
                  <View>
                    <Icon
                      name='ion|ios-close-empty'
                      size={40}
                      color={Colors.darkBackgroundText}
                      style={styles.cameraReverseIcon}
                    />
                  </View>
                </TouchableOpacity>
              </View>
              <Text style={styles.cameraTopText}>Camera</Text>
              <View style={styles.cameraRightIconContainer}>
                <TouchableOpacity
                  underlayColor='transparent'
                  onPress={this.switchCamera.bind(this)}
                  style={styles.cameraTopFlip}>
                  <View>
                    <Icon
                      name='ion|ios-reverse-camera-outline'
                      size={40}
                      color={Colors.darkBackgroundText}
                      style={styles.cameraReverseIcon}
                    />
                  </View>
                </TouchableOpacity>
              </View>
          </View>
          <Camera
            ref="cam"
            aspect="fill"
            style={[styles.camera, this.state.measuredSize]}
            type={this.state.cameraType}>
          </Camera>
          <View style={styles.cameraBottom}>
              <View style={styles.cameraBottomCaptureContainer}>
                <CameraLiveButton testingStyles={styles.cameraBottomCapture} onPress={this.takePicture.bind(this)} />
              </View>
          </View>
        </View>
      </View>

    );
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  camera: {
    flex: 0,
    backgroundColor: 'transparent',
  },


  cameraTopCancel: {
    alignSelf: 'center',
  },
  cameraTopFlip: {
    alignSelf: 'center',
  },
  cameraReverseIcon: {
    width: 40,
    height: 40,
  },
  cameraTop: {
    backgroundColor: Colors.cameraBackground,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 10,
    height: 70,
    width: fullWidth
  },
  cameraLeftIconContainer: {
    flex: 1,
  },
  cameraRightIconContainer: {
    flex: 1,
  },
  cameraTopText: {
    flex: 7,
    textAlign: 'center',
    fontFamily: 'SanFranciscoDisplay-Regular',
    color: Colors.darkBackgroundText,
    fontSize: 18,
  },


  cameraBottomCaptureContainer: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center'
  },
  cameraBottomCapture: {
    width: 90,
    height: 90,
    borderRadius: 90 / PixelRatio.get(),
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraBottomReset: {
    flex: 1
  },
  cameraBottomUsePhoto: {
    flex: 1
  },
  cameraBottomPreviewContainer: {
    flex: 1,
    flexDirection: 'row',
    width: fullWidth
  },
  cameraBottom: {
    backgroundColor: Colors.cameraBackground,
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: fullWidth,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  instructions: {
    textAlign: 'center',
    color: '#333333'
  }
});

module.exports = CameraLive;