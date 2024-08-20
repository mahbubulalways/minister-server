import getFilteringProducts from '../../../utils/getFilteringProducts';
import { IProductBasicInfo } from '../product/products.interface';
import Products from '../product/products.model';
import { IWashingMachineSpecification } from './washingMachine.interface';
import WashingMachineSpecification from './washingMachine.model';

//* insert washing machine
export const insertWashingMachineIntoDB = async (
  product: IProductBasicInfo,
  specification: IWashingMachineSpecification,
) => {
  const washingMachineSpecification =
    await WashingMachineSpecification.create(specification);

  if (washingMachineSpecification?._id) {
    product.specifications = washingMachineSpecification?._id;
    const productInfo = await Products.create(product);
    return productInfo;
  }
};
//

//* get all washing machine without specification
export const getWashingMachineFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, 'washing-machine', '');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
//

//* get single washing machine by _id
export const getSingleWashingMachineFromDB = async (_id: string) => {
  const product = await Products.find({ _id }).populate('specifications');
  return product;
};
//

//* get automatic-top-load washing machine
export const getTopLoadWashingMachineFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, '', 'automatic-top-load');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
//

//* get automatic-front-load led washing machine
export const getFrontLoadWashingMachineFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, '', 'automatic-front-load');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
