import getFilteringProducts from '../../../utils/getFilteringProducts';
import { IProductBasicInfo } from '../product/products.interface';
import Products from '../product/products.model';
import { IRefrigeratorSpecification } from './refrigerator.interface';
import RefrigeratorSpecification from './refrigerator.model';

//* insert Refrigerator
export const insertRefrigeratorIntoDB = async (
  product: IProductBasicInfo,
  specification: IRefrigeratorSpecification,
) => {
  const refrigeratorSpecification =
    await RefrigeratorSpecification.create(specification);

  if (refrigeratorSpecification?._id) {
    product.specifications = refrigeratorSpecification?._id;
    const productInfo = await Products.create(product);
    return productInfo;
  }
};
//

//* get all Refrigerator without specification
export const getRefrigeratorFromDB = async (query: Record<string, unknown>) => {
  const pipeline = getFilteringProducts(query, 'refrigerator', '');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
//

//* get single Refrigerator by _id
export const getSingleRefrigeratorFromDB = async (_id: string) => {
  const product = await Products.find({ _id }).populate('specifications');
  return product;
};
//

//* get direct cool refrigerator , sub category
export const getDirectCoolRefrigeratorFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, '', 'direct-cool-refrigerator');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
//

//* get non frost refrigerator , sub category
export const getNonFrostRefrigeratorFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, '', 'non-frost-refrigerator');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
//

//* get freezer refrigerator , sub category
export const getFreezerRefrigeratorFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, '', 'freezer-refrigerator');
  console.log(pipeline);
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
