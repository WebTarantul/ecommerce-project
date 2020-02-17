import { types } from 'mobx-state-tree';
import { ProductModel } from '../Products/ProductModel';
import { UserModel } from '../Auth/UserModel';
import { MessageModel } from './MessageModel';

export const ChatModel = types
  .model('Chat', {
    id: types.identifierNumber,
    productId: types.number,
    ownerId: types.number,
    createdAt: types.string,
    updatedAt: types.string,
    message: types.reference(MessageModel),
    product: types.reference(ProductModel),
    participants: types.array(types.reference(UserModel)),
  })
  .preProcessSnapshot((snapshot) => ({
    ...snapshot,
    product: snapshot.product || snapshot.productId,
    participants: undefined,
    user: snapshot.participants[0],
  }));
