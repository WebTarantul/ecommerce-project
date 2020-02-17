import { types } from 'mobx-state-tree';
import { OwnProductsStore } from '../Products/OwnProductsStore';

export const UserModel = types
  .model('UserModel', {
    id: types.number,
    fullName: types.string,
    location: types.maybeNull(types.string),
    avatar: types.maybeNull(types.string),
    phone: types.maybeNull(types.string),
    createdAt: types.maybeNull(types.string),
    updatedAt: types.maybeNull(types.string),
    email: types.maybe(types.string),
    ownProducts: types.optional(OwnProductsStore, {}),
  })
  .views((self) => ({
    get initials() {
      return self.fullName
        .split(' ')
        .map((n) => n[0])
        .join('');
    },
  }));
