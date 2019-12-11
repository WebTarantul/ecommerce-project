import React from 'react';
import Header from 'src/components/Header/Header';
import { useStore } from 'src/stores/createStore';
import Chat from 'src/components/Chat/Chat';
import { Route, Redirect } from 'react-router';
import { PrivateRoute, routes } from '../routes';

const Inbox = (props) => {
  const store = useStore();

  return (
    <div className="InboxWrapper">
      <Header />
      <Chat />
      {!store.auth.isLoggedIn && <Redirect to={routes.login} />}
    </div>
  );
};

export default Inbox;
