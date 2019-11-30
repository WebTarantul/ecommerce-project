import React from 'react';
import { routes } from 'src/scenes/routes';
import { Link } from 'react-router-dom';
import s from './UserButtons.module.scss';
import Icon from 'src/components/Icon/Icon';
import classNames from 'classnames';

const UserButtons = ({ headerIsLight }) => {
  const cx = classNames.bind(s);
  const darkModeClass = cx({
    darkText: headerIsLight,
  });

  return (
    <div className={`${s.wrapper} ${s[darkModeClass]}`}>
      <Link className={s.btn} to="">
        Sell
      </Link>
      <Link className={s.login} to={routes.login}>
        Login
      </Link>
      <button
        className={s.favorite}
        type="button"
        aria-label="favorite"
      >
        <Icon
          name="favorite"
          fill="white"
          classNameInner={s.favoriteInner}
          classNameOver={s.favoriteOver}
        />
        <span className={s.visuallyHidden}>Favorite</span>
      </button>
    </div>
  );
};

export default UserButtons;
