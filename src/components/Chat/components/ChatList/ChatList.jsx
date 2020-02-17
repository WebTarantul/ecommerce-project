import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'src/stores/createStore';
import Spinner from 'src/components/Spinner';
import ChatItem from '../ChatItem/ChatItem';
import s from './ChatList.module.scss';

const ChatList = () => {
  const chats = useStore((store) => store.chats);

  useEffect(() => {
    chats.fetchChats.run();
  }, []);

  if (chats.items.length === 0 && chats.fetchChats.isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={s.list}>
      {chats.items.length === 0 && <h3>You have not chats</h3>}
      {chats.items.map((item) => (
        <ChatItem className={s.item} chat={item} key={item.id} />
      ))}
    </ul>
  );
};

export default observer(ChatList);
