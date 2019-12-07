import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sceleton from 'react-loading-skeleton';
import { observer } from 'mobx-react';
import { useStore } from 'src/stores/createStore';
import NotFound from '../NotFound/NotFound';
import s from './ProductView.module.scss';
import Icon from '../Icon/Icon';
import ProductOwner, {
  ProductOwnerSceleton,
} from './components/ProductOwner/ProductOwner';

const ProductView = () => {
  const { id } = useParams();
  const products = useStore((store) => store.entities.products);

  const product = products.get(id);

  useEffect(() => {
    if (!product) {
      products.getProduct.run(id);
    }
  }, []);

  if (products.getProduct.isLoading) {
    return <ProductViewSceleton />;
  } else if (!product) {
    return (
      <div className={s.productView}>
        <div className={s.inner}>
          <NotFound text="Product is not found" />
        </div>
      </div>
    );
  }
  return (
    <>
      <div className={s.productView}>
        <div className={s.inner}>
          <div className={s.left}>
            <article className={s.article}>
              <figure className={s.imageWrapper}>
                <img
                  src={(product.photos && product.photos[0]) || ''}
                  alt={product.title}
                />
                <span className={s.price}>${product.price}</span>
              </figure>
              <section className={s.section}>
                <header className={s.header}>
                  <h1 className={s.title}>{product.title}</h1>
                  <time
                    className={s.date}
                    dateTime={new Date(
                      product.createdAt,
                    ).toISOString()}
                  >
                    {new Date(product.createdAt).toUTCString()}
                  </time>
                  <address className={s.address}>
                    <Icon name="pin" />
                    <span className={s.location}>
                      {product.location}
                    </span>
                  </address>
                </header>
                <p className={s.descr}>{product.description}</p>
              </section>
            </article>
          </div>
          <div className={s.right}>
            <aside className={s.owner}>
              <ProductOwner
                ownerId={product.ownerId}
                {...{ product }}
              />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
};

export default observer(ProductView);

function ProductViewSceleton() {
  return (
    <>
      <div className={s.productView}>
        <div className={s.inner}>
          <div className={s.left}>
            <article className={s.article}>
              <figure className={s.imageWrapper}>
                <Sceleton height="310px" />
              </figure>
              <section className={s.section}>
                <header className={s.header}>
                  <h1 className={s.title}>
                    <Sceleton height={20} />
                  </h1>
                  <div className={s.date}>
                    <Sceleton height={16} />
                  </div>
                  <div className={s.address}>
                    <Sceleton circle height={50} width={50} />
                    <span className={s.location}>
                      <Sceleton height={14} />
                    </span>
                  </div>
                </header>

                <p className={s.descr}>
                  <Sceleton count={10} />
                </p>
              </section>
            </article>
          </div>
          <div className={s.right}>
            <aside className={s.owner}>
              <ProductOwnerSceleton />
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
