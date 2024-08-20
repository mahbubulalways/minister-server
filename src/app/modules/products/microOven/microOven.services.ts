import getFilteringProducts from '../../../utils/getFilteringProducts';
import { IProductBasicInfo } from '../product/products.interface';
import Products from '../product/products.model';
import { IOvenSpecifications } from './microOven.interface';
import OvenSpecification from './microOven.model';

//* insert MicroOven
export const insertMicroOvenIntoDB = async (
  product: IProductBasicInfo,
  specification: IOvenSpecifications,
) => {
  const microOvenSpecification = await OvenSpecification.create(specification);
  if (microOvenSpecification?._id) {
    product.specifications = microOvenSpecification?._id;
    const productInfo = await Products.create(product);
    return productInfo;
  }
};
//

//* get all MicroOven without specification
export const getAllMicroOvenFromDB = async (query: Record<string, unknown>) => {
  const pipeline = getFilteringProducts(query, 'micro-oven', 'micro-oven');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
//

//* get single MicroOven by _id
export const getSingleMicroOvenFromDB = async (_id: string) => {
  const product = await Products.find({ _id }).populate('specifications');
  return product;
};
//
