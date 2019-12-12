import React from 'react';
import { Redirect, useLocation } from 'react-router';
import Chat from 'src/components/Chat/Chat';
import Header from 'src/components/Header/Header';
import { useStore } from 'src/stores/createStore';
import { routes } from '../routes';
import s from './Inbox.module.scss';

const Inbox = (props) => {
  const store = useStore();
  const location = useLocation();

  return (
    <div className={s.wrapper}>
      <Header />
      <Chat />
      {!store.auth.isLoggedIn && (
        <Redirect
          to={{ pathname: routes.login, state: location.state }}
        />
      )}
    </div>
  );
};

export default Inbox;
