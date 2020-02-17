import cn from 'classnames/bind';
import { formatDistance } from 'date-fns';
import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from 'src/stores/createStore';
import s from './MessageItem.module.scss';

const cx = cn.bind(s);

const MessageItem = ({ message, ...props }) => {
  const viewer = useStore((store) => store.viewer);
  const isOwnerMessage = viewer.user.id === message.ownerId;

  const messageClazz = {
    sending: message.sendMessage.isLoading,
    error: message.sendMessage.isError,
    derived: message.sendMessage.isSuccess,
    read: message.read,
  };
  const title = {
    sending: message.sendMessage.isLoading,
    error: message.sendMessage.isError,
    derived: message.sendMessage.isSuccess,
    read: message.read,
  };

  return (
    <li
      className={cx('wrapper', { ownerMessage: isOwnerMessage })}
      {...props}
    >
      <span className={s.inner}>
        <span className={s.message}>
          {message.text}
          <span
            className={cx('status', 'derived', messageClazz)}
            title={cn(title) || 'derived'}
          />
        </span>
        <span className={s.timeAgo}>
          {formatDistance(new Date(message.updatedAt), new Date())}{' '}
          ago
        </span>
      </span>
    </li>
  );
};

export default observer(MessageItem);
