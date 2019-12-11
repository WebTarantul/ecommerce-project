import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useStore } from 'src/stores/createStore';
import Spinner from 'src/components/Spinner';
import ChatItem from '../ChatItem/ChatItem';
import s from './ChatList.module.scss';
import { observer } from 'mobx-react';

const ChatList = (props) => {
  const chats = useStore((store) => store.chats);

  useEffect(() => {
    chats.fetchChats.run();
  }, []);

  if (chats.fetchChats.isLoading) {
    return <Spinner />;
  }

  return (
    <ul className={s.list}>
      {chats.items.map((item) => (
        <ChatItem className={s.item} chat={item} key={item.id} />
      ))}
    </ul>
  );
};

export default observer(ChatList);
