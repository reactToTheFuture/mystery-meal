import fs from 'fs';
import path from 'path';
import { restaurantSchema } from '../data/restaurantSchema';
import { graphql } from 'graphql';
import { introspectionQuery, printSchema } from 'graphql/utilities';

async () => {
  var result = await (graphql(restaurantSchema, introspectionQuery));
  if (result.errors) {
    console.error(
      'ERROR introspecting schema: ',
      JSON.stringify(result.errors, null, 2)
    );
  } else {
    fs.writeFileSync(
      path.join(__dirname, '../data/restaurantSchema.json'),
      JSON.stringify(result, null, 2)
    );
  }
}();

// Save user readable type system shorthand of schema
console.log('restaurantSchema',restaurantSchema);
fs.writeFileSync(
  path.join(__dirname, '../data/restaurantSchema.graphql'),
  printSchema(restaurantSchema)
);
