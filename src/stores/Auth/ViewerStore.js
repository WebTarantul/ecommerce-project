import { types } from 'mobx-state-tree';
import { UserModel } from './UserModel';
import { safeReference } from '../utils';

const ViewerModel = UserModel.named('ViewerModel');

export const ViewerStore = types
  .model('ViewerStore', {
    userModel: types.maybe(ViewerModel),
    user: types.maybe(safeReference(ViewerModel)),
  })
  .actions((self) => ({
    setViewer(viewer) {
      self.userModel = viewer;
      self.user = +viewer.id;
    },
    removeViewer() {
      self.user = undefined;
    },
  }));
