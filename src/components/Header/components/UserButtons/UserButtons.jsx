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
import ViewerAvatar from 'src/components/ViewerAvatar/ViewerAvatar';

const UserButtons = ({ headerIsLight }) => {
  const darkModeClass = headerIsLight ? 'darkText' : '';
  const store = useStore();
  const [hoverUser, setHoverUser] = useState(false);
  const toggleHover = () => setHoverUser(!hoverUser);
  const hasSaved = store.savedProducts.savedQuantity > 0;
  return (
    <div className={`${s.wrapper} ${s[darkModeClass]}`}>
      <Link
        className={`${s.btn} ${s.item}`}
        to={{
          pathname: routes.productAdd,
          state: { modal: true },
        }}
      >
        Sell
      </Link>
      {store.auth.isLoggedIn ? (
        <ViewerAvatar
          className={s.item}
          onMouseLeave={toggleHover}
          onMouseEnter={toggleHover}
        >
          <UserBlock user={store.viewer.user} {...{ hoverUser }} />
        </ViewerAvatar>
      ) : (
        <Link className={`${s.login} ${s.item}`} to={routes.login}>
          Login
        </Link>
      )}
      <Link
        to={routes.savedProducts}
        className={`${s.favorite} ${s.item}`}
        aria-label="favorite"
      >
        <Icon
          name="favorite"
          fill="white"
          fillInner={hasSaved ? 'white' : 'transparent'}
          classNameInner={s.favoriteInner}
          classNameOver={s.favoriteOver}
        />
        <span className={s.visuallyHidden}>Favorite</span>
      </Link>
    </div>
  );
};

export default observer(UserButtons);
