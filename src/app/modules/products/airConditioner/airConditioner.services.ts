import getFilteringProducts from '../../../utils/getFilteringProducts';
import { IProductBasicInfo } from '../product/products.interface';
import Products from '../product/products.model';
import { IACSpecifications } from './airConditioner.interface';
import ACSpecification from './airConditioner.model';

//* insert television
export const insertAirConditionerIntoDB = async (
  product: IProductBasicInfo,
  specification: IACSpecifications,
) => {
  const airConditionerSpecification =
    await ACSpecification.create(specification);
  if (airConditionerSpecification?._id) {
    product.specifications = airConditionerSpecification?._id;
    const productInfo = await Products.create(product);
    return productInfo;
  }
};
//

//* get all Air Conditioner without specification
export const getAirConditionerFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, 'air-conditioner', '');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
//

//* get single AirConditioner by _id
export const getSingleAirConditionerFromDB = async (_id: string) => {
  const product = await Products.find({ _id }).populate('specifications');
  return product;
};
//

//* get split Conditioner wit sub category
export const getSplitAirConditionerFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, '', 'split-ac');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
//

//* get ceiling Conditioner wit sub category
export const getCeilAirConditionerFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, '', 'ceiling-ac');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
//
