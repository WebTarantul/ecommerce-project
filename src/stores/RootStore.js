import { types as t, types, applySnapshot } from 'mobx-state-tree';
import Api from 'src/api';
import { AuthStore } from './Auth/AuthStore';
import { ViewerStore } from './Auth/ViewerStore';
import { LatestProductsStore } from './Products/LatestProductsStore';
import { EntitiesStore } from './EntitiesStore';

export const RootStore = t
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
    latestProducts: types.optional(LatestProductsStore, {}),
    entities: types.optional(EntitiesStore, {}),
  })
  .actions((self) => ({
    async bootstrap() {
      try {
        // eslint-disable-next-line no-undef
        const token = localStorage.getItem('___token');
        if (token) {
          Api.Auth.setToken(token);
          const res = await Api.Account.getUser();
          self.viewer.setViewer(res.data);
          self.auth.setIsLoggedIn(true);
        } else {
          self.viewer.setViewer(undefined);
          self.auth.setIsLoggedIn(false);
        }
        // return;
      } catch (error) {
        console.error(error);
      }
    },
  }));
