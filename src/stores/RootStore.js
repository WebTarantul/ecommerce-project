import { types as t, types } from 'mobx-state-tree';
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
        }
        return;
      } catch (error) {
        console.error(error);
      }
    },
  }));
