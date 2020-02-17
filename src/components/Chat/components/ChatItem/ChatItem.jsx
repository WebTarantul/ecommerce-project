import React, { useState } from 'react';
import PropTypes from 'prop-types';
import s from './ChatItem.module.scss';
import ChatProduct from '../ChatProduct/ChatProduct';
import {
  Link,
  generatePath,
  useParams,
  useLocation,
} from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import cn from 'classnames/bind';
import { observer } from 'mobx-react';

const cx = cn.bind(s);

const ChatItem = ({ className, chat }) => {
  let isActive = false;
  const location = useLocation();
  const match = location.pathname.match(/\/\d*$/);
  const param = match && match[0].slice(1);

  if (+param === chat.id) {
    isActive = true;
  }

  return (
    <li className={cx('wrapper', className, { active: isActive })}>
      <Link
        className={s.link}
        to={generatePath(routes.chat, { chatId: chat.id })}
      >
        <div className={s.container}>
          <div className={cx('text', 'rightBorder')}>
            <p className={s.name}>{chat.participant.fullName}</p>
            <p className={s.lastMessage}>{chat.lastMessage}</p>
          </div>
          <div className={cx('product', 'rightBorder')}>
            <ChatProduct
              className={s.productInner}
              product={chat.product}
            />
          </div>
          <time className={s.time}>{chat.updatedTime}</time>
        </div>
      </Link>
    </li>
  );
};

ChatItem.propTypes = {
  // bla: PropTypes.string,
};

ChatItem.defaultProps = {
  // bla: 'test',
};

export default observer(ChatItem);
