import EachRestaurant from './EachRestaurant';

class ListOfRestaurants extends React.Component {
  render() {
    var {categories} = this.props;
    return (
      <ol>
        {categories.map(category => (
          <li>
            <h1>{category.name}</h1>
            <ol>
              {category.restaurants.edges.map(edge => (
                <li><EachRestaurant restaurant={edge.node} /></li>
              ))}
            </ol>
          </li>
        ))}
      </ol>
    );
  }
}

export default Relay.createContainer(ListOfRestaurants, {
  fragments: {
    categories: () => Relay.QL`
      fragment on Category @relay(plural: true) {
        name,
        restaurants(first: 5) {
          edges {
            node {
              ${EachRestaurant.getFragment('restaurant')}
            }
          }
        }
      }
    `,
  },
});
