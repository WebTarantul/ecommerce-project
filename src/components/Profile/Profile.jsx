import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';
import ProductList from '../ProductList/ProductList';
import Spinner from '../Spinner';
import ProfileHeader from '../ProfileHeader/ProfileHeader';
import withFooter from '../HOCs/withFooter/withFooter';
import s from './Profile.module.scss';

const Profile = () => {
  const { id: userId } = useParams();
  const entities = useStore((store) => store.entities);
  const user = entities.users.get(userId);
  const productList = user && user.ownProducts.items;
  useEffect(() => {
    if (!user) {
      entities.users.fetchUser.run(userId);
    } else if (user && user.ownProducts.items.length === 0) {
      user.ownProducts.fetchItems.run();
    }
  }, [user]);
  return (
    <div className={s.profile}>
      <div className={s.container}>
        {entities.users.fetchUser.isLoading && <Spinner />}
        {user && (
          <ProfileHeader
            user={user}
            productsCount={user.ownProducts.itemsQuantity}
          />
        )}

        {user && user.ownProducts.items.length !== 0 && (
          <ProductList productList={productList} />
        )}
        {user && user.ownProducts.fetchItems.isLoading && <Spinner />}
      </div>
    </div>
  );
};

export default withFooter(observer(Profile));
