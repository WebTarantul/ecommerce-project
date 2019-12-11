import { types, getRoot } from 'mobx-state-tree';
import { ProductModel } from '../Products/ProductModel';
import { UserModel } from '../Auth/UserModel';
import { MessageModel } from './MessageModel';
import { asyncModel } from '../utils';
import Api from 'src/api';
import { MessageSchema } from '../schemas';
import { MessagesStore } from './MessagesStore';

export const ChatModel = types
  .model('ChatModel', {
    id: types.identifierNumber,
    productId: types.number,
    ownerId: types.number,
    createdAt: types.string,
    updatedAt: types.string,
    message: types.reference(MessageModel),
    messages: types.optional(MessagesStore, {}),
    product: types.reference(ProductModel),
    participants: types.array(types.reference(UserModel)),

    sendMessage: asyncModel(sendMessage),
  })
  .views((self) => ({
    get participant() {
      return self.participants[0];
    },
    get updatedTime() {
      const d = new Date(self.updatedAt);
      let h = d.getHours();
      let m = d.getMinutes();
      if (h < 10) {
        h = `0${h}`;
      }
      if (m < 10) {
        m = `0${m}`;
      }

      return `${h}:${m}`;
    },
    get lastMessage() {
      if (self.message.text.length > 25) {
        return `${self.message.text
          .split('')
          .slice(0, 22)
          .join('')}...`;
      }
      return self.message.text;
    },
  }))
  .preProcessSnapshot((snapshot) => {
    return {
      ...snapshot,
      product: snapshot.product || snapshot.productId,
      // participants: undefined,
      // user:
      //   (snapshot.participants && snapshot.participants[0]) ||
      //   snapshot.user,
    };
  });

function sendMessage(text) {
  return async function sendMessageFlow(flowStore, store) {
    const res = await Api.Chats.sendMessage(store.id, text);
    // const result = flowStore.merge(res.data, MessageSchema);
    store.messages.addMessage(res.data);
  };
}
