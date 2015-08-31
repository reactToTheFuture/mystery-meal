export default class extends Relay.Route {
  static queries = {
    categories: (Component) => Relay.QL`
    query {
      categories(names: $categoryNames) {
        ${Component.getFragment('categories')},
      }
    }
    `,
  };
  static routeName = 'RestaurantHomeRoute';
}
