import React from 'react';
import { observer } from 'mobx-react';
import s from './ProfileHeader.module.scss';

const ProfileHeader = ({ user, productsCount }) => (
  <div className="ProfileHeaderWrapper">
    <div className={s.user}>
      <div className={s.inner}>
        <div className={s.info}>
          <figure className={s.imageWrapper}>
            <i
              className={s.avatar}
              style={{
                backgroundImage: `url(${user.avatar ||
                  `https://randomuser.me/api/portraits/lego/4.jpg`})`,
              }}
            />
          </figure>
          <h2>{user.fullName}</h2>
          <p>{user.location}</p>
        </div>
        <div className={s.boxes}>
          <span className={`${s.box} ${s.feedback}`}>
            <span className={s.number}>88%</span>
            <span className={s.text}>Positive feedback</span>
          </span>
          <span className={`${s.box} ${s.sales}`}>
            <span className={s.number}>123</span>
            <span className={s.text}>Sales</span>
          </span>
          <span className={`${s.box} ${s.active}`}>
            <span className={s.number}>{productsCount}</span>
            <span className={s.text}>Active listings</span>
          </span>
        </div>
      </div>
    </div>
  </div>
);

export default observer(ProfileHeader);
