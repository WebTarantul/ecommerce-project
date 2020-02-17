import React from 'react';
import Avatar from 'src/components/Avatar/Avatar';
import { Link, generatePath } from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import { observer } from 'mobx-react';
import s from './ChatHeader.module.scss';
import ChatProduct from '../ChatProduct/ChatProduct';

const ChatHeader = ({ chat }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <Link
          className={s.userLink}
          to={generatePath(routes.userProducts, {
            id: chat.participant.id,
          })}
        >
          <User participant={chat.participant} />
        </Link>
        <Link
          className={s.productLink}
          to={generatePath(routes.product, { id: chat.product.id })}
        >
          <ChatProduct product={chat.product} className={s.product} />
        </Link>
      </div>
    </div>
  );
};

export default observer(ChatHeader);

function User({ participant }) {
  return (
    <div className={s.user}>
      <Avatar user={participant} size="45px" />
      <p className={s.name}>{participant.fullName}</p>
    </div>
  );
}
