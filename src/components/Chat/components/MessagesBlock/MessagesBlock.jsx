import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useStore } from 'src/stores/createStore';
import ChatHeader from '../ChatHeader/ChatHeader';
import { observer } from 'mobx-react';
import MessageList from '../MessageList/MessageList';
import s from './MessagesBlock.module.scss';
import ChatInput from '../ChatInput/ChatInput';

const MessagesBlock = (props) => {
  const { chatId } = useParams();
  const chat = useStore((store) => store.chats.getById(chatId));

  useEffect(() => {
    if (chat) {
      chat.messages.fetchMessages.run();
    }
  }, [chat]);

  if (!chat) {
    return null;
  }

  return (
    <div className={s.wrapper}>
      <ChatHeader {...{ chat }} />

      <MessageList
        className={s.messageList}
        messages={chat.messages}
      />

      <ChatInput {...{ chat }} />
    </div>
  );
};

export default observer(MessagesBlock);
