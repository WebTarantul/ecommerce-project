import React, { useState } from 'react';
// eslint-disable-next-line import/extensions
import Icon from 'src/components/Icon/Icon';
import s from './Search.module.scss';

const Search = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [locationValue, setLocationValue] = useState('');

  return (
    <div className={s.wrapper}>
      <div className={s.inner}>
        <form className={s.form} action="">
          <label className={s.searchLabel} htmlFor="search">
            <Icon className={s.icon} name="loop" />
            <input
              className={s.inputSearch}
              type="text"
              placeholder="Search products by name"
              id="search"
              onChange={(evt) => setSearchValue(evt.target.value)}
              value={searchValue}
            />
          </label>
          <label className={s.locationLabel} htmlFor="location">
            <Icon className={s.icon} name="pin" />
            <input
              className={s.inputLocation}
              type="text"
              placeholder="Location"
              id="location"
              value={locationValue}
              onChange={(evt) => setLocationValue(evt.target.value)}
            />
          </label>
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
