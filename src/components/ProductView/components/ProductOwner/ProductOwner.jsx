import { observer } from 'mobx-react';
import React, { useEffect, useState } from 'react';
import {
  generatePath,
  Link,
  useHistory,
  useLocation,
} from 'react-router-dom';
import Sceleton from 'react-loading-skeleton';
import { routes } from 'src/scenes/routes';
import { useStore } from 'src/stores/createStore';
import ErrorIndicator from '../../../ErrorIndicator';
import Icon from '../../../Icon/Icon';
import s from './ProductOwner.module.scss';
import ChatWithSellerModal from '../ChatWithSellerModal/ChatWithSellerModal';

const ProductOwner = ({ ownerId, product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const store = useStore();
  const { users } = store.entities;
  const user = users.get(ownerId);

  useEffect(() => {
    if (!user) {
      users.fetchUser.run(ownerId);
    }
    if (location.state && location.state.fromChatButton) {
      setIsModalOpen(true);
    }
  }, []);

  if (users.fetchUser.isLoading) {
    return <ProductOwnerSceleton />;
  } else if (!user && users.fetchUser.isError) {
    return <ErrorIndicator />;
  }

  const handleChatWithSeller = () => {
    if (!store.auth.isLoggedIn) {
      history.push(routes.login, {
        fromChatButton: true,
        fromProductId: product.id,
      });
    }
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    user && (
      <>
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
                to={generatePath(routes.userProducts, {
                  id: ownerId,
                })}
              >
                {user.fullName}
              </Link>
            </p>
            <address className={s.personLocation}>
              {user.location}
            </address>
          </div>
          <div className={s.buttons}>
            <button
              className={s.toChat}
              type="button"
              onClick={handleChatWithSeller}
            >
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
        <ChatWithSellerModal
          isOpen={isModalOpen}
          onRequestClose={handleCloseModal}
          shouldCloseOnEsc
          contentLabel="Chat with seller"
          {...{ product, user }}
        />
      </>
    )
  );
};

export default observer(ProductOwner);

export function ProductOwnerSceleton() {
  return (
    <div className={s.wrapper}>
      <div className={s.person}>
        <figure className={s.imageWrapper}>
          <Sceleton circle="true" height={72} width={72} />
        </figure>
        <p className={s.personName}>
          <Sceleton />
        </p>
        <address className={s.personLocation}>
          <Sceleton />
        </address>
      </div>
      <div className={s.buttons}>
        <Sceleton height={47} style={{ marginBottom: '10px' }} />
        <Sceleton height={47} />
      </div>
    </div>
  );
}
