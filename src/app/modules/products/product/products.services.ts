import Products from './products.model';

export const getSingleProductFromDB = async (_id: string) => {
  const product = await Products.findOne({ _id }).populate('specifications');
  return product;
};
export const getAllProductsFromDB = async () => {
  const product = await Products.find({});
  return product;
};
export const getCategoryProductsFromDB = async (payload: string) => {
  if (payload === 'products') {
    return await Products.find({});
  } else {
    const product = await Products.find({ mainCategory: payload });
    return product;
  }
};
