import { types as t, types } from 'mobx-state-tree';
import Api, { SocketApi } from 'src/api';
import { AuthStore } from './Auth/AuthStore';
import { ViewerStore } from './Auth/ViewerStore';
import { EntitiesStore } from './EntitiesStore';
import { LatestProductsStore } from './Products/LatestProductsStore';
import { ProductAddStore } from './Products/ProductAddStore';
import { SavedProductsStore } from './Products/SavedProductsStore';
import { ChatStore } from './Chats/ChatStore';
import { MessagesStore } from './Chats/MessagesStore';

export const RootStore = t
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
    entities: types.optional(EntitiesStore, {}),
    productAdd: types.optional(ProductAddStore, {}),
    savedProducts: types.optional(SavedProductsStore, {}),
    chats: types.optional(ChatStore, {}),
  })
  .actions((self) => ({
    async bootstrap() {
      try {
        // eslint-disable-next-line no-undef
        const token = localStorage.getItem('___token');
        if (token) {
          Api.Auth.setToken(token);
          SocketApi.init(token);
          const res = await Api.Account.getUser();
          self.viewer.setViewer(res.data);
          self.auth.setIsLoggedIn(true);
          self.subscribeToEvents();
        } else {
          self.viewer.setViewer(undefined);
          self.auth.setIsLoggedIn(false);
        }
        // return;
      } catch (error) {
        console.error(error);
      }
    },
    subscribeToEvents() {
      SocketApi.handleMessage((message) => {
        self.chats.handleMessage(message);
      });
    },
  }));
