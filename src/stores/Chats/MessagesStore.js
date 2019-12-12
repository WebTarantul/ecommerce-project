import { types, getRoot, getParent } from 'mobx-state-tree';
import uuid from 'uuid/v4';
import Api from 'src/api';
import { MessageModel } from './MessageModel';
import { MessageSchema, MessagesCollectionSchema } from '../schemas';
import { asyncModel } from '../utils';

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
    sendMessage(text) {
      const message = {
        id: uuid(),
        chatId: getParent(self).id,
        ownerId: getRoot(self).viewer.user.id,
        text,
        read: false,
        createdAt: new Date().toString(),
        updatedAt: new Date().toString(),
        isNew: true,
      };
      self.addMessage(message);
    },

    addMessage(message) {
      const result = getRoot(self).entities.normalize(
        message,
        MessageSchema,
      );
      self.items.push(result);
    },

    addMessages(messagesArr) {
      messagesArr.forEach((i) => {
        if (self.items.findIndex((item) => item.id === i) === -1) {
          self.items.unshift(i);
        }
      });
    },
    replaceMessage(messageId, newMessage) {
      const idx = self.items.findIndex((i) => i.id === messageId);

      if (idx > -1) {
        self.items.slice().splice(idx, 1, newMessage);
      }
    },
  }));

function fetchMessages() {
  return async function fetchMessagesFlow(flowStore, store) {
    const res = await Api.Chats.fetchMessages(store.chatId);

    const result = flowStore.merge(
      res.data,
      MessagesCollectionSchema,
    );

    store.addMessages(result);
  };
}
