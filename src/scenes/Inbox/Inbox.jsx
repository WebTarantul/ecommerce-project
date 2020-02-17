import React from 'react';
import { Redirect } from 'react-router';
import Chat from 'src/components/Chat/Chat';
import Header from 'src/components/Header/Header';
import { useStore } from 'src/stores/createStore';
import { routes } from '../routes';
import s from './Inbox.module.scss';

const Inbox = (props) => {
  const store = useStore();

  return (
    <div className={s.wrapper}>
      <Header />
      <Chat />
      {!store.auth.isLoggedIn && <Redirect to={routes.login} />}
    </div>
  );
};

export default Inbox;
