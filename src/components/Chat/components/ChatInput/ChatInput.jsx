import React, { useState } from 'react';
import s from './ChatInput.module.scss';
import { ReactComponent as Shape } from './icon-shape.svg';
import { ReactComponent as Smile } from './icon-smile.svg';

const ChatInput = ({ chat, ...props }) => {
  const [message, setMessage] = useState('');

  function handleSend(evt) {
    evt.preventDefault();
    chat.sendMessage.run(message);
  }

  return (
    <>
      <form className={s.form} action="#" onSubmit={handleSend}>
        <label className={s.label} htmlFor="chatInput">
          <span className={s.labelText}>
            Type your message here..
          </span>
          <input
            aria-label="Type your message here.."
            className={s.input}
            type="text"
            onChange={(evt) => setMessage(evt.target.value)}
            value={message}
            id="chatInput"
            placeholder="Type your message here.."
          />
        </label>
        <div className={s.buttons}>
          <button type="button">
            <Smile />
            <span>Add emoji</span>
          </button>
          <button type="button">
            <Shape />
            <span>Add file</span>
          </button>
        </div>
      </form>
    </>
  );
};

export default ChatInput;
