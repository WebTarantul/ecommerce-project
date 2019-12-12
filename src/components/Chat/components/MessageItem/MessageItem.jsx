import cn from 'classnames/bind';
import { formatDistance } from 'date-fns';
import React from 'react';
import { useStore } from 'src/stores/createStore';
import s from './MessageItem.module.scss';

const cx = cn.bind(s);

const MessageItem = ({ message, ...props }) => {
  const viewer = useStore((store) => store.viewer);
  const isOwnerMessage = viewer.user.id === message.ownerId;

  return (
    <li
      className={cx('wrapper', { ownerMessage: isOwnerMessage })}
      {...props}
    >
      <span className={s.inner}>
        <span className={s.message}>{message.text}</span>
        <span className={s.timeAgo}>
          {formatDistance(new Date(message.updatedAt), new Date())}{' '}
          ago
        </span>
      </span>
    </li>
  );
};

export default MessageItem;
