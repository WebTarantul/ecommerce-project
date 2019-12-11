import { observer } from 'mobx-react';
import React from 'react';
import { Route } from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import s from './Chat.module.scss';
import ChatList from './components/ChatList/ChatList';
import MessageList from './components/MessageList/MessageList';
import MessagesBlock from './components/MessagesBlock/MessagesBlock';

const Chat = () => {
  return (
    <div className={s.wrapper}>
      <aside className={s.aside}>
        <ChatList />
      </aside>
      <main className={s.main}>
        <Route path={routes.chat} component={MessagesBlock} />
      </main>
    </div>
  );
};

export default observer(Chat);
