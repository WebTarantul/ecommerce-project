/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import { routes } from 'src/scenes/routes';
import { Link } from 'react-router-dom';
import cn from 'classnames/bind';
import Icon from '../Icon/Icon';
import s from './Header.module.scss';
import UserButtons from './components/UserButtons/UserButtons';

const cx = cn.bind(s);

const Header = ({ isLight, children }) => {
  return (
    <header className={cx('wrapper', { lightMode: isLight })}>
      <div className={s.container}>
        <div className={s.logoBlock}>
          <Link className={s.logoLink} to={routes.home}>
            <Icon
              name="logo"
              classNameText={s.logoText}
              isDark={isLight}
            />
          </Link>
        </div>
        <div className={s.userBlock}>
          <UserButtons headerIsLight={isLight} />
        </div>
      </div>
      <div className={s.searchBlock}>{children}</div>
    </header>
  );
};

export default Header;
