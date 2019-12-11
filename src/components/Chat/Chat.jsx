import React, { useEffect } from 'react';
import { useStore } from 'src/stores/createStore';
import Spinner from '../Spinner';
import { observer } from 'mobx-react';
import {
  Link,
  generatePath,
  Route,
  useParams,
  useLocation,
  useRouteMatch,
  withRouter,
} from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import MessageList from './components/MessageList/MessageList';
import ChatItem from './components/ChatItem/ChatItem';
import s from './Chat.module.scss';

const Chat = ({ match }) => {
  const chats = useStore((store) => store.chats);

  useEffect(() => {
    chats.fetchChats.run();
  }, []);

  if (chats.fetchChats.isLoading) {
    return <Spinner />;
  }

  console.log(chats.items);

  return (
    <div className={s.wrapper}>
      <aside className={s.aside}>
        <ul className={s.list}>
          {chats.items.map((item) => (
            <ChatItem className={s.item} chat={item} key={item.id} />
          ))}
        </ul>
      </aside>
      <main className={s.main}>
        <Route path={routes.chat} component={MessageList} />
      </main>
    </div>
  );
};

export default observer(Chat);
