import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sceleton from 'react-loading-skeleton';
import { observer } from 'mobx-react';
import { useStore } from 'src/stores/createStore';
import NotFound from '../NotFound/NotFound';
import s from './ProductView.module.scss';

const ProductView = () => {
  const { id } = useParams();
  const {
    entities: { products },
  } = useStore();

  const product = products.collection.get(id);
  useEffect(() => {
    if (!product) {
      products.getProduct.run(id);
    }
  }, []);

  return product && !products.getProduct.isLoading ? (
    <>
      <div className={s.productView}>
        <div className={s.inner}>
          <div className={s.left}>
            <img src={product.photos[0]} alt={product.title} />
            <p>{product.title}</p>
          </div>
          <div className={s.right}>
            <button>Chat with seller</button>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div className={s.productView}>
      <div className={s.inner}>
        <div className={s.left}>
          <Sceleton count={10} />
        </div>
        <div className={s.right}>
          <Sceleton />
          {/* <button>Chat with seller</button> */}
        </div>
      </div>
    </div>
    // <Spinner />
  );
};

export default observer(ProductView);
