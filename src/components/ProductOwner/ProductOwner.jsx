import { observer } from 'mobx-react';
import React, { useEffect } from 'react';
import { generatePath, Link } from 'react-router-dom';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import ErrorIndicator from '../ErrorIndicator';
import Icon from '../Icon/Icon';
import Spinner from '../Spinner';
import s from './ProductOwner.module.scss';

const ProductOwner = ({ ownerId, product }) => {
  const store = useStore();
  const { users } = store.entities;
  const user = users.get(ownerId);

  useEffect(() => {
    if (!user) {
      users.fetchUser.run(ownerId);
    }
  }, []);
  if (users.fetchUser.isLoading) {
    return <Spinner />;
  } else if (!user && users.fetchUser.isError) {
    return <ErrorIndicator />;
  }

  return (
    user && (
      <div className={s.wrapper}>
        <div className={s.person}>
          <figure className={s.imageWrapper}>
            <i
              className={s.avatar}
              style={{
                backgroundImage: `url(${user.avatar ||
                  `https://randomuser.me/api/portraits/lego/4.jpg`})`,
              }}
            />
          </figure>
          <p className={s.personName}>
            <Link
              to={generatePath(routes.userProducts, { id: ownerId })}
            >
              {user.fullName}
            </Link>
          </p>
          <address className={s.personLocation}>
            {user.location}
          </address>
        </div>
        <div className={s.buttons}>
          <button className={s.toChat} type="button">
            <span>Chat with seller</span>
          </button>
          <button
            className={s.toFavorite}
            type="button"
            onClick={() =>
              store.savedProducts.toggleSaved(product.id)
            }
          >
            <Icon
              name="favorite"
              fill={product.saved ? 'none' : '#b7b7b7'}
              fillInner={product.saved ? '#349a89' : 'none'}
            />
            <span>
              {product.saved
                ? 'Remove from favorive'
                : 'Add to favorive'}
            </span>
          </button>
        </div>
      </div>
    )
  );
};

export default observer(ProductOwner);
