import { observer } from 'mobx-react';
import React from 'react';
import { generatePath, Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import fadeDownRight from 'src/assets/styles/transitions/fadeDownRight.module.scss';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import ViewerAvatar from '../ViewerAvatar/ViewerAvatar';
import s from './UserBlock.module.scss';

const UserBlock = ({ hoverUser, user }) => {
  const store = useStore();
  const onLogout = () => {
    store.auth.logout();
  };
  return (
    <CSSTransition
      unmountOnExit
      in={hoverUser}
      timeout={300}
      classNames={fadeDownRight}
    >
      <div className={s.userBlock}>
        <header className={s.header}>
          <ViewerAvatar />
          <div className={s.nameBlock}>
            <b className={s.name}>{user.fullName}</b>
            <a className={s.email} href={`mailto:${user.email}`}>
              <span>{user.email}</span>
            </a>
            <Link
              to={generatePath(routes.userProducts, { id: user.id })}
            >
              Profile
            </Link>
          </div>
        </header>
        <div className={s.links}>
          <Link className={s.link} to="/">
            Edit Profile
          </Link>
          <button className={s.link} onClick={onLogout}>
            Logout
          </button>
        </div>
      </div>
    </CSSTransition>
  );
};

export default observer(UserBlock);
