import { types } from 'mobx-state-tree';
import Api from '../../api';
import { LatestProductCollectionSchema } from '../schemas';
import { asyncModel } from '../utils';
import { ProductModel } from './ProductModel';
import { PAGE_SIZE } from 'src/constans/products';

export const LatestProductsStore = types
  .model('LatestProductsStore', {
    items: types.array(types.reference(ProductModel)),
    fetchLatest: asyncModel(fetchLatest),
    fetchMore: asyncModel(fetchMore),
    hasNoMore: false,
  })
  .actions((self) => ({
    setItems(items) {
      self.items = items;
    },
    append(items) {
      if (!Array.isArray(items)) {
        items = [items];
      }
      self.items.push(...items);
    },
    setHasNoMore(bool) {
      self.hasNoMore = bool;
    },
  }));

function fetchLatest() {
  return async function fetchLatestFlow(flowStore, store) {
    store.setItems([]);
    const res = await Api.Products.fetchLatest();
    // const { result, entities } = normalize(
    //   res.data,
    //   LatestProductCollectionSchema,
    // );
    // root.entities.merge(entities);

    const result = flowStore.merge(
      res.data,
      LatestProductCollectionSchema,
    );
    store.setItems(result);
    store.setHasNoMore(result.length < PAGE_SIZE);

    // const ids = res.data.map((item) => {
    //   root.entities.products.add(item.id, item);
    //   return item.id;
    // });
    // store.setItems(ids);
  };
}

function fetchMore() {
  return async function fetchMoreFlow(flowStore, store) {
    if (
      store.fetchLatest.isLoading ||
      flowStore.isLoading ||
      store.hasNoMore ||
      store.items.length === 0
    ) {
      return;
    }

    try {
      flowStore.start();
      const from = store.items[store.items.length - 1];

      const res = await Api.Products.fetchMore({
        from: from.id,
        limit: PAGE_SIZE,
      });
      const result = flowStore.merge(
        res.data,
        LatestProductCollectionSchema,
      );
      if (res.data.length < PAGE_SIZE) {
        store.setHasNoMore(true);
      }

      store.append(result);

      flowStore.success();
    } catch (error) {
      console.error(error);
    }
  };
}
