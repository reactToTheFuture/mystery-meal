import 'babel/polyfill';
import ListOfRestaurants from './components/ListOfRestaurants';
import RestaurantHomeRoute from './routes/RestaurantHomeRoute';

React.render(
  <Relay.RootContainer
    Component={ListOfRestaurants}
    route={new RestaurantHomeRoute({
      categoryNames: ['vegetarian', 'nonvegetarian']
    })}
  />,
  document.getElementById('root')
);
