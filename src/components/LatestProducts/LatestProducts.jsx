import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'src/stores/createStore';
import Spinner from '../Spinner';
import ProductList from '../ProductList/ProductList';
import s from './LatestProducts.module.scss';
import ErrorIndicator from '../ErrorIndicator';

const LatestProducts = () => {
  const store = useStore();

  useEffect(() => {
    store.latestProducts.fetchLatest.run();
  }, []);
  if (store.latestProducts.fetchLatest.isError) {
    return <ErrorIndicator />;
  }
  return (
    <div className={s.LatestProducts}>
      {store.latestProducts.fetchLatest.isLoading && <Spinner />}
      <ProductList
        className={s.productList}
        productList={store.latestProducts.items}
      />
    </div>
  );
};

export default observer(LatestProducts);
