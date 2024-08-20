export interface ICartProduct {
  productId: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
}

export interface ICart {
  email: string;
  cart: ICartProduct[];
}
