# Mystery Meal - A new way of discovering food
Thesis project at MKS-20 implemented by using React, React-Native and Relay.

##When instaling Camera Roll Feature (needed for both cameraroll and live features)
1. In XCode, go to your `Project` ➜ `Libraries` ➜ `React.xcodeproj` ➜ `React` ➜ `Base`
2. Right click on `Base` and select `New File...`
3. Select `Objective-C File` and click `Next`
4. Name the file **RCTCustom.m** and click `Next`
5. Change the file contents to [this file](https://raw.githubusercontent.com/scottdixon/react-native-upload-from-camera-roll/master/RCTCustom.m)
6. Press `Enter` after @end to create a newline (XCode specific syntax rule)
7. `Save`

##When using the app font system
###San Francisco Display
- fontFamily: 'SanFranciscoDisplay-Light'
- fontFamily: 'SanFranciscoDisplay-Regular'
- fontFamily: 'SanFranciscoDisplay-Semibold'

###San Francisco Text
- fontFamily: 'SanFranciscoText-Regular'
- fontFamily: 'SanFranciscoText-RegularItalic'
- fontFamily: 'SanFranciscoText-Medium'
- fontFamily: 'SanFrancisco-Semibold'

##Color Guide
These are located within the globalVariables.js file at the root of the directory. Just require either the whole set or choose which ones...

![Colorguide](https://s3-us-west-2.amazonaws.com/mystery-meal/color-guide.png)

License
-------

MIT, see LICENSE.
