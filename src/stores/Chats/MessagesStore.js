import { types, getRoot, getParent } from 'mobx-state-tree';
import { MessageModel } from './MessageModel';
import { MessageSchema, MessagesCollectionSchema } from '../schemas';
import { asyncModel } from '../utils';
import Api from 'src/api';

export const MessagesStore = types
  .model('MessagesStore', {
    items: types.array(types.reference(MessageModel)),

    fetchMessages: asyncModel(fetchMessages),
  })
  .views((self) => ({
    get asList() {
      return self.items.slice().reverse();
    },
    get chatId() {
      return getParent(self).id;
    },
  }))
  .actions((self) => ({
    addMessage(message) {
      const result = getRoot(self).entities.normalize(
        message,
        MessageSchema,
      );
      self.items.unshift(result);
    },
    addMessages(messagesArr) {
      self.items.unshift(...messagesArr);
    },
  }));

function fetchMessages() {
  return async function fetchMessagesFlow(flowStore, store, root) {
    const res = await Api.Chats.fetchMessages(store.chatId);
    const result = flowStore.merge(
      res.data,
      MessagesCollectionSchema,
    );

    store.addMessages(result);
  };
}
