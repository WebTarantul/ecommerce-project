import { types as t, types, applySnapshot } from 'mobx-state-tree';
import Api from 'src/api';
import { AuthStore } from './Auth/AuthStore';
import { ViewerStore } from './Auth/ViewerStore';

export const RootStore = t
  .model('RootStore', {
    auth: types.optional(AuthStore, {}),
    viewer: types.optional(ViewerStore, {}),
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
          applySnapshot(self, {
            viewer: { user: undefined },
            auth: { isLoggedIn: false },
          });
        }
        // return;
      } catch (error) {
        console.error(error);
      }
    },
  }));
