import React from 'react';
import { useStore } from 'src/stores/createStore';
import cn from 'classnames/bind';
import s from './MessageItem.module.scss';
import {
  formatRelative,
  subDays,
  formatDistance,
  differenceInMinutes,
} from 'date-fns';
import { ru } from 'date-fns/locale';
import { subMinutes } from 'date-fns/esm';

const cx = cn.bind(s);

const MessageItem = ({ message, ...props }) => {
  const viewer = useStore((store) => store.viewer);
  const isOwnerMessage = viewer.user.id === message.ownerId;

  return (
    <li className={cx('wrapper', { ownerMessage: isOwnerMessage })}>
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
