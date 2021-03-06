import { observer } from 'mobx-react';
import React from 'react';
import cn from 'classnames/bind';
import { getColorFromInitials } from 'src/utils';
import { useStore } from 'src/stores/createStore';
import s from './Avatar.module.scss';

const cx = cn.bind(s);

const Avatar = ({ children, size = '40px', className, ...props }) => {
  const user = useStore((state) => state.viewer.user);
  console.log('user', user);
  const { initials } = user;
  return user ? (
    <div className={cx('wrapper', className)} {...props}>
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
          <div
            className={s.name}
            style={{
              backgroundColor: getColorFromInitials(initials),
            }}
          >
            <span>{initials}</span>
          </div>
        )}
        {children}
      </div>
    </div>
  ) : null;
};

export default observer(Avatar);
