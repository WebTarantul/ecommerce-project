/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import Icon from 'src/components/Icon/Icon';
import { routes } from 'src/scenes/routes';
import UserBlock from 'src/components/UserBlock/UserBlock';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';
import Avatar from 'src/components/Avatar/Avatar';
import { Link } from 'react-router-dom';
import s from './UserButtons.module.scss';

const UserButtons = ({ headerIsLight }) => {
  const darkModeClass = headerIsLight ? 'darkText' : '';
  const store = useStore();
  const [hoverUser, setHoverUser] = useState(false);
  const toggleHover = () => setHoverUser(!hoverUser);
  return (
    <div className={`${s.wrapper} ${s[darkModeClass]}`}>
      <Link className={`${s.btn} ${s.item}`} to="">
        Sell
      </Link>

      {store.viewer.user ? (
        <Avatar
          className={s.item}
          onMouseLeave={toggleHover}
          onMouseEnter={toggleHover}
        >
          <UserBlock user={store.viewer.user} {...{ hoverUser }} />
        </Avatar>
      ) : (
        <Link className={`${s.login} ${s.item}`} to={routes.login}>
          Login
        </Link>
      )}
      <button
        className={`${s.favorite} ${s.item}`}
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

export default observer(UserButtons);
