import { observer } from 'mobx-react';
import React from 'react';
import s from './Avatar.module.scss';

const r = Math.floor(Math.random() * 256);
const g = Math.floor(Math.random() * 256);
const b = Math.floor(Math.random() * 256);
const rgb = `rgb(${r},${g},${b})`;

const Avatar = ({
  user,
  children,
  size = '40px',
  className,
  ...props
}) => {
  const initials = user
    ? user.fullName
        .split(' ')
        .map((n) => n[0])
        .join('')
    : null;

  return user ? (
    <div className={`${s.wrapper} ${className}`} {...props}>
      <div className={s.inner} style={{ width: size, height: size }}>
        {user.avatar ? (
          <span
            className={s.avatar}
            style={{
              backgroundImage: `url(${user.avatar})`,
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
