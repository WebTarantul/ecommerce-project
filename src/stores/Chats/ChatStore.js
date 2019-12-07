import { types } from 'mobx-state-tree';
import { asyncModel } from '../utils';
import { ChatModel } from './ChatModel';

export const ChatStore = types.model('ChatStore', {
  items: types.array(ChatModel),

  fetch: asyncModel(fetchChats),
});

function fetchChats() {
  return async function fetchChatsFlow(flowStore, store, root) {
    // const res = await Api.Chats.fetch()
  };
}
