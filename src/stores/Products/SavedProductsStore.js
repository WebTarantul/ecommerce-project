import { getRoot, types } from 'mobx-state-tree';
import Api from 'src/api';
import { Products } from '../schemas';
import { asyncModel, safeReference } from '../utils';
import { ProductModel } from './ProductModel';

export const SavedProductsStore = types
  .model('SavedProductsStore', {
    items: types.array(types.maybe(safeReference(ProductModel))),

    fetchSavedProducts: asyncModel(fetchSavedProducts),
    postSavedProducts: asyncModel(postSavedProducts),
    postSavedProduct: asyncModel(postSavedProduct, false),
    deleteSavedProduct: asyncModel(deleteSavedProduct),
  })
  .actions((self) => ({
    add(items) {
      if (Array.isArray(items)) {
        self.items = [...new Set([...self.items, ...items])];
      } else {
        self.items.push(items);
      }
    },
    remove(productId) {
      const idx = self.items.findIndex(
        (item) => item.id === productId,
      );
      if (idx > -1) {
        self.items.splice(idx, 1);
      }
    },
    toggleSaved(productId) {
      const root = getRoot(self);
      const product = root.entities.products.get(productId);
      const { isLoggedIn } = root.auth;

      product.toggleSaved();

      if (self.items.findIndex((i) => i && i.id === productId) > -1) {
        self.remove(productId);
        if (isLoggedIn) self.deleteSavedProduct.run(productId);
      } else {
        self.add(productId);
        if (isLoggedIn) self.postSavedProduct.run(productId);
      }
    },
  }));

function fetchSavedProducts() {
  return async function fetchSavedProductsFlow(flowStore, store) {
    flowStore.start();
    const res = await Api.Products.fetchSavedProducts();
    const result = flowStore.merge(res.data, Products);
    store.add(result);
    flowStore.success();
  };
}

function postSavedProducts(productsIdsArray) {
  return async function postSavedProductsFlow() {
    await Api.Products.postSavedProducts(productsIdsArray);
  };
}

function postSavedProduct(productId) {
  return async function postSavedProductFlow(flowStore, store) {
    try {
      flowStore.start();
      await Api.Products.postSavedProduct(productId);
      flowStore.success();
    } catch (error) {
      console.error(
        `${error.response.data.error}. Status: ${error.response.statusText}`,
      );
      flowStore.error();
      store.toggleSaved(productId);
    }
  };
}

function deleteSavedProduct(productId) {
  return async function deleteSavedProductFlow(flowStore) {
    flowStore.start();
    Api.Products.deleteSavedProduct(productId);
    flowStore.success();
  };
}
