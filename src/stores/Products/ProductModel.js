import { types, getRoot } from 'mobx-state-tree';
import Api from 'src/api';
import { UserModel } from '../Auth/UserModel';
import { safeReference, asyncModel } from '../utils';
import { ChatSchema } from '../schemas';

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
    owner: safeReference(types.late(() => UserModel)),

    createChat: asyncModel(createChat, false),
  })
  .preProcessSnapshot((snapshot) => ({
    ...snapshot,
    owner: snapshot.ownerId,
  }))
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

function createChat(message) {
  return async function createChatFlow(flowStore, store) {
    let chatId;
    try {
      flowStore.start();

      const res = await Api.Chats.createChat(store.id, message);
      chatId = res.data.id;
      res.data.participants = [store.owner];
      flowStore.merge(res.data, ChatSchema);

      flowStore.success();
    } catch (error) {
      flowStore.error(error);
      throw error;
    }
    return chatId;
  };
}
