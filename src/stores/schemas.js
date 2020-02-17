import { schema } from 'normalizr';

export const UserSchema = new schema.Entity('users');
export const ProductSchema = new schema.Entity('products', {
  owner: UserSchema,
});
export const ProductsSchema = [ProductSchema];
export const LatestProduct = new schema.Entity('products');
export const LatestProductCollectionSchema = [LatestProduct];
export const MessageSchema = new schema.Entity('messages');
export const ChatSchema = new schema.Entity('chats', {
  message: MessageSchema,
  product: ProductSchema,
  participants: [UserSchema],
});
