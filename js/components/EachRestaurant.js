class EachRestaurant extends React.Component {
  render() {
    var {restaurant} = this.props;
    return <div>{restaurant.name}</div>;
  }
}

export default Relay.createContainer(EachRestaurant, {
  fragments: {
    restaurant: () => Relay.QL`
      fragment on Restaurant {
        name
      }
    `,
  }
});
