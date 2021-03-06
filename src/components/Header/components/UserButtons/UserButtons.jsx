/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable jsx-a11y/anchor-is-valid */
import cn from 'classnames/bind';
import { observer } from 'mobx-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from 'src/components/Icon/Icon';
import UserBlock from 'src/components/UserBlock/UserBlock';
import ViewerAvatar from 'src/components/ViewerAvatar/ViewerAvatar';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import s from './UserButtons.module.scss';

const cx = cn.bind(s);

const UserButtons = ({ headerIsLight }) => {
  const store = useStore();
  const [hoverUser, setHoverUser] = useState(false);

  const toggleHover = () => setHoverUser(!hoverUser);
  const hasSaved = store.savedProducts.savedQuantity > 0;

  return (
    <div className={cx('wrapper', { darkText: headerIsLight })}>
      <Link
        to={{
          pathname: routes.inbox,
          state: { fromInboxButton: true },
        }}
      >
        <Icon
          name="inbox"
          circleFill="transparent"
          className={s.inboxIcon}
        />
      </Link>
      <Link
        className={cx('btn', 'item')}
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
        <Link className={cx('login', 'item')} to={routes.login}>
          Login
        </Link>
      )}
      <Link
        to={routes.savedProducts}
        className={cx('favorite', 'item')}
        aria-label="favorite"
        type="button"
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
