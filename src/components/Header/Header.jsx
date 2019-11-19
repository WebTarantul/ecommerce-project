import React from 'react';
import PropTypes from 'prop-types';
import { routes } from 'src/scenes/routes';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';
import s from './Header.module.scss';
import UserButtons from './components/UserButtons/UserButtons';


const Header = ({isLight, children}) => {
  const darkModeClass = isLight ? s.lightMode : '';

  return (
    <header className={`${s.wrapper} ${darkModeClass}`}>
      <div className={s.container}>
        <div className={s.logoBlock}>
          <Link className={s.logoLink} to={routes.home}>
            {isLight &&<Icon name="logo" classNameText={s.logoText}  isDark/>}
            {!isLight &&<Icon name="logo" classNameText={s.logoText} />}

          </Link>
        </div>
        <div className={s.userBlock}>
          <UserButtons headerIsLight={isLight} />
        </div>
      </div>
      <div className={s.searchBlock}>
        {children}
      </div>
    </header>
  )
};

Header.propTypes = {
  // bla: PropTypes.string,
};

Header.defaultProps = {
  // bla: 'test',
};

export default Header;
