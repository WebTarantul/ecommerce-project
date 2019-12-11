import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';
// import { Test } from './MessageList.styles';

const MessageList = (props) => {
  const { chatId } = useParams();
  const chat = useStore((store) => store.chats.getById(chatId));
  const [message, setMessage] = useState('');
  useEffect(() => {
    if (chat) {
      chat.messages.fetchMessages.run();
    }
  }, [chat]);

  function handleSend() {
    chat.sendMessage.run(message);
  }
  if (!chat) {
    return null;
  }
  return (
    <div className="MessageListWrapper">
      <input
        type="text"
        onChange={(evt) => setMessage(evt.target.value)}
        value={message}
      />
      <button onClick={handleSend}>Send</button>

      <ul>
        {chat.messages.asList.map((i) => {
          return <li key={i.id}>{i.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default observer(MessageList);
