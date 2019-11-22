import { observer } from 'mobx-react';
import React from 'react';
import { useStore } from 'src/stores/createStore';
import s from './Avatar.module.scss';

const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
const rgb = `rgb(${r},${g},${b})`;

const Avatar = ({ children, className, ...props }) => {
  const { viewer } = useStore();

  const initials = viewer.user
    ? viewer.user.fullName
        .split(' ')
        .map((n) => n[0])
        .join('')
    : null;

  return viewer.user ? (
    <div className={`${s.wrapper} ${className}`} {...props}>
      <div className={s.inner}>
        {viewer.user.avatar ? (
          <span
            className={s.avatar}
            style={{
              backgroundImage: `url(${viewer.user.avatar})`,
              color: 'red',
            }}
          />
        ) : (
          <div className={s.name} style={{ backgroundColor: rgb }}>
            <span>{initials}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  ) : null;
};

export default observer(Avatar);
