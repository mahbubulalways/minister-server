import { IProductBasicInfo } from '../product/products.interface';
import Products from '../product/products.model';

//* insert HumanCare
export const insertHumanCareIntoDB = async (product: IProductBasicInfo) => {
  const products = await Products.create(product);
  return products;
};
//

//* get all HumanCare without specification
export const getAllHumanCareFromDB = async () => {
  const products = await Products.find({ mainCategory: 'human-care' });
  return products;
};
//

//* get single HumanCare by _id
export const getSingleHumanCareFromDB = async (_id: string) => {
  const product = await Products.find({ _id });
  return product;
};
//
