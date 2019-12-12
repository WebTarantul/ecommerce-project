/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'src/components/Icon/Icon';
import UserBlock from 'src/components/UserBlock/UserBlock';
import ViewerAvatar from 'src/components/ViewerAvatar/ViewerAvatar';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import s from './UserButtons.module.scss';

const UserButtons = ({ headerIsLight }) => {
  const darkModeClass = headerIsLight ? 'darkText' : '';
  const store = useStore();
  const [hoverUser, setHoverUser] = useState(false);
  const toggleHover = () => setHoverUser(!hoverUser);
  const hasSaved = store.savedProducts.savedQuantity > 0;
  return (
    <div className={`${s.wrapper} ${s[darkModeClass]}`}>
      <Link to={routes.inbox}>
        <Icon name="inbox" circleFill="transparent" />
      </Link>
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
