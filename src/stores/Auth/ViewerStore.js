import { types as t } from 'mobx-state-tree';
import { UserModel } from './UserModel';

export const ViewerStore = t
  .model('ViewerStore', {
    user: t.maybe(UserModel),
  })
  .actions((self) => ({
    setViewer(viewer) {
      self.user = viewer;
    },
    removeViewer() {
      self.user = undefined;
    },
  }));
