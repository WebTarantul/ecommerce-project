import { types } from 'mobx-state-tree';
import Api from 'src/api';
import { MessageSchema } from '../schemas';
import { asyncModel } from '../utils';

export const MessageModel = types
  .model('MessageModel', {
    id: types.union(types.identifierNumber, types.identifier),
    chatId: types.number,
    ownerId: types.number,
    text: types.string,
    read: types.boolean,
    createdAt: types.string,
    updatedAt: types.string,
    isNew: false,

    sendMessage: asyncModel(sendMessage),
  })
  .actions((self) => ({
    afterAttach() {
      if (self.isNew) {
        self.sendMessage.run();
      }
    },
  }));

function sendMessage() {
  return async function sendMessageFlow(flowStore, store, root) {
    const res = await Api.Chats.sendMessage(store.chatId, store.text);
    const result = flowStore.merge(res.data, MessageSchema);
    root.entities.chats
      .get(store.chatId)
      .messages.replaceMessage(store.id, result);
  };
}
