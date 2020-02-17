import { types } from 'mobx-state-tree';
import Api from 'src/api';
import { asyncModel } from '../utils';
import { ChatModel } from './ChatModel';
import { ChatCollectionSchema } from '../schemas';

export const ChatStore = types
  .model('ChatStore', {
    items: types.array(types.reference(ChatModel)),

    fetchChats: asyncModel(fetchChats),
  })
  .views((self) => ({
    getById(chatId) {
      return self.items.find((i) => i.id === +chatId);
    },
  }))
  .actions((self) => ({
    runInAction(cb) {
      cb(self);
    },
    handleMessage(message) {
      if (message.type === 'ADD') {
        const chat = self.getById(message.message.chatId);
        if (chat) {
          chat.messages.addMessage(message.message);
        }
      }
    },
  }));

function fetchChats() {
  return async function fetchChatsFlow(flowStore, store, root) {
    const res = await Api.Chats.fetchChats();
    const result = flowStore.merge(res.data, ChatCollectionSchema);

    store.runInAction((self) => {
      self.items = result;
    });
  };
}
