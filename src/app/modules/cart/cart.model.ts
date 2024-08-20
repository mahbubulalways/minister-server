import mongoose from 'mongoose';
import { ICart, ICartProduct } from './cart.interface';

const cartProductSchema = new mongoose.Schema<ICartProduct>({
  productId: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, default: 1 },
});
const cartSchema = new mongoose.Schema<ICart>({
  email: { type: String, required: true },
  cart: [cartProductSchema],
});

const Cart = mongoose.model<ICart>('Cart', cartSchema);
export default Cart;
