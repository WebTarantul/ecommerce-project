import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import s from './ChatHeader.module.scss';
import Avatar from 'src/components/Avatar/Avatar';
import ChatProduct from '../ChatProduct/ChatProduct';
import { Link, generatePath } from 'react-router-dom';
import { routes } from 'src/scenes/routes';

const ChatHeader = ({ chat }) => {
  console.log(chat);
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <User participant={chat.participant} />
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
