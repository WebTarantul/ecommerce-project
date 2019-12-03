import { types, getRoot } from 'mobx-state-tree';
import { UserModel } from '../Auth/UserModel';
import { safeReference } from '../utils';

export const ProductModel = types
  .model('ProductModel', {
    id: types.identifierNumber,
    ownerId: types.number,
    title: types.string,
    description: types.maybeNull(types.string),
    photos: types.maybeNull(types.array(types.string)),
    location: types.string,
    price: types.number,
    saved: false,
    createdAt: types.string,
    updatedAt: types.string,
    owner: types.maybe(safeReference(types.late(() => UserModel))),
  })
  .actions((self) => ({
    toggleSaved() {
      // const savedProductsStore = getRoot(self).savedProducts;
      self.saved = !self.saved;
      // if (self.saved) {
      //   savedProductsStore.add(self.id);
      // } else {
      //   savedProductsStore.remove(self.id);
      // }
    },
    afterAttach() {
      const { savedProducts } = getRoot(self);
      const { items } = savedProducts;
      const isFoundProduct = items.find(
        (item) => item && item.id === self.id,
      );
      if (isFoundProduct) {
        self.saved = true;
      }
      if (self.saved && !isFoundProduct) {
        savedProducts.add(self.id);
      }
    },
  }));
