import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { useStore } from 'src/stores/createStore';
import Spinner from '../Spinner';
import ProductList from '../ProductList/ProductList';
import s from './LatestProducts.module.scss';
import ErrorIndicator from '../ErrorIndicator';

const LatestProducts = () => {
  const latestProducts = useStore((store) => store.latestProducts);
  useEffect(() => {
    if (latestProducts.items.length === 0) {
      latestProducts.fetchLatest.run();
    }
    // eslint-disable-next-line no-undef
    document.body.onscroll = (evt) => {
      const needFetch = !!(
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight
      );

      if (needFetch) {
        latestProducts.fetchMore.run();
      }
    };
  }, []);
  if (latestProducts.fetchLatest.isError) {
    return <ErrorIndicator />;
  }
  return (
    <div className={s.LatestProducts}>
      {!latestProducts.items.length &&
        latestProducts.fetchLatest.isLoading && <Spinner />}
      <ProductList
        className={s.productList}
        productList={latestProducts.items}
      />
      {latestProducts.fetchMore.isLoading && (
        <Spinner className={s.spinner} />
      )}
    </div>
  );
};

export default observer(LatestProducts);
