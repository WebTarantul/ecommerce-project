import React, { useEffect } from 'react';
import { useStore } from 'src/stores/createStore';
import { observer } from 'mobx-react';
import s from './SavedList.module.scss';
import ProductList from '../ProductList/ProductList';
import Spinner from '../Spinner';
import withFooter from '../HOCs/withFooter/withFooter';

const SavedList = () => {
  const savedProducts = useStore((store) => store.savedProducts);
  useEffect(() => {
    if (
      savedProducts.items.length === 0 ||
      savedProducts.items.findIndex((i) => i === undefined) > -1
    ) {
      savedProducts.fetchSavedProducts.run();
    }
  }, []);
  if (savedProducts.fetchSavedProducts.isLoading) {
    return <Spinner />;
  }
  return (
    <div className={s.wrapper}>
      <p className={s.title}>
        <span className={s.titleText}>Saved items</span>
        <span className={s.quantity}>
          ({savedProducts.savedQuantity})
        </span>
      </p>
      <ProductList productList={savedProducts.items} />
    </div>
  );
};

export default withFooter(observer(SavedList));
