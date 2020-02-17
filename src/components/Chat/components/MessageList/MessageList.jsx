import cn from 'classnames/bind';
import { observer } from 'mobx-react';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import Spinner from 'src/components/Spinner';
import { useStore } from 'src/stores/createStore';
import MessageItem from '../MessageItem/MessageItem';
import s from './MessageList.module.scss';

const cx = cn.bind(s);

const MessageList = ({ className }) => {
  const { chatId } = useParams();
  const chat = useStore((store) => store.chats.getById(chatId));
  const listRef = useRef(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  });

  useEffect(() => {
    if (chat) {
      chat.messages.fetchMessages.run();
    }
  }, [chat]);

  if (!chat) {
    return null;
  }

  return (
    <div className={cx('wrapper', className)} ref={listRef}>
      <ul className={s.list}>
        {chat.messages.asList.map((i) => {
          return <MessageItem key={i.id} message={i} />;
        })}
      </ul>

      {chat.messages.items.length === 0 &&
        chat.messages.fetchMessages.isLoading && (
          <Spinner className={s.spinner} size="38px" />
        )}
    </div>
  );
};

export default observer(MessageList);
