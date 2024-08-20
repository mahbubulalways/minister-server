import { ICart } from './cart.interface';
import Cart from './cart.model';

export const addCartIntoDB = async (payload: ICart) => {
  const { email, cart: newProducts } = payload;
  const product = newProducts[0];

  // Check if the user already has a cart
  const existingCart = await Cart.findOne({ email });

  if (!existingCart) {
    // If no cart exists for the user, create a new one
    const newCart = await Cart.create(payload);
    return newCart;
  }

  // Check if the product already exists in the cart
  const existingProductIndex = existingCart.cart.findIndex(
    (item) => item.productId === product.productId,
  );

  if (existingProductIndex > -1) {
    // If the product exists, increase the quantity
    existingCart.cart[existingProductIndex].quantity += product.quantity;
  } else {
    // If the product does not exist, push it to the cart
    existingCart.cart.push(product);
  }

  // Save the updated cart
  const updatedCart = await existingCart.save();

  return updatedCart;
};

export const getCartFromDB = async (payload: string) => {
  const result = await Cart.findOne({ email: payload });
  return result;
};
