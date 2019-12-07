import { types } from 'mobx-state-tree';
import { ProductsCollection } from './Products/ProductsCollection';
import { UsersCollection } from './Users/UserCollection';
import { ChatsCollection } from './Chats/ChatsCollection';
import { MessagesCollection } from './Chats/MessagesCollection';

export const EntitiesStore = types
  .model('EntitiesStore', {
    products: ProductsCollection,
    users: UsersCollection,
    chats: ChatsCollection,
    messages: MessagesCollection,
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
