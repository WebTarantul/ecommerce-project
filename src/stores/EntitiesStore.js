import { types } from 'mobx-state-tree';
import { ProductsCollection } from './Products/ProductsCollection';
import { UsersCollection } from './Users/UserCollection';

export const EntitiesStore = types
  .model('EntitiesStore', {
    products: ProductsCollection,
    users: UsersCollection,
  })
  .actions((self) => ({
    merge(entities) {
      Object.keys(entities).forEach((collectionName) => {
        const collectionEntities = entities[collectionName];
        Object.keys(collectionEntities).forEach((id) => {
          const value = collectionEntities[id];
          self[collectionName].add(id, value);
        });
      });
    },
  }));
