import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  nodeDefinitions,
} from 'graphql-relay';

import {
  getCategory,
  getRestaurant,
  getCategories,
} from './database';

/*

*/
var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'Category') {
      return getCategory(id);
    } else if (type === 'Restaurant') {
      return getRestaurant(id);
    } else {
      return null;
    }
  },
  (obj) => {
    return obj.restaurants ? categoryType : restaurantType;
  }
);


var restaurantType = new GraphQLObjectType({
  name: 'Restaurant',
  description: 'A restaurant in Santa Monica',
  fields: () => ({
    id: globalIdField('Restaurant'),
    name: {
      type: GraphQLString,
      description: 'The name of the restaurant.',
    },
    // pictures:
  }),
  interfaces: [nodeInterface] // check this
});

// Stablishing connection between categories and restaurant
// One category has many restaurants
var {connectionType: restaurantConnection} =
  connectionDefinitions({name: 'Restaurant', nodeType: restaurantType});

var categoryType = new GraphQLObjectType({
  name: 'Category',
  description: 'A category of restaurant in Santa Monica',
  fields: () => ({
    id: globalIdField('Category'),
    name: {
      type: GraphQLString,
      description: 'The name of the category.',
    },
    restaurants: {
      type: restaurantConnection,
      description: 'The restaurants that belong to a specific category.',
      args: connectionArgs,
      resolve: (category, args) => connectionFromArray(
        category.restaurants.map((id) => getRestaurant(id)),
        args
      ),
    }
  }),
  interfaces: [nodeInterface]
});

// set of Querys to GraphQL from React.

var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    categories: {
      type: new GraphQLList(categoryType),
      args: {
        names: {
          type: new GraphQLList(GraphQLString),
        },
      },
      resolve: (root, {names}) => getCategories(names),
    },
    node: nodeField
  })
});

export var restaurantSchema = new GraphQLSchema({
  query: queryType,
});
