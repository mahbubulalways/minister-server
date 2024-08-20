import getFilteringProducts from '../../../utils/getFilteringProducts';
import { IProduct, IProductBasicInfo } from '../product/products.interface';
import Products from '../product/products.model';
import { ITelevisionSpecifications } from './television.interface';
import TelevisionSpecification from './television.model';

// insert television
export const insertTelevisionIntoDB = async (
  product: IProductBasicInfo,
  specification: ITelevisionSpecifications,
) => {
  console.log(specification);
  const teleSpecification = await TelevisionSpecification.create(specification);
  console.log(teleSpecification);
  if (teleSpecification?._id) {
    product.specifications = teleSpecification?._id;
    const productInfo = await Products.create(product);
    return productInfo;
  }
};

// get all television without specification
export const getTelevisionFromDB = async (query: Record<string, unknown>) => {
  // const pipeline = [];
  // if (query.screen != 'undefined') {
  //   pipeline.push({
  //     $match: { mainCategory: 'television', size: query.screen },
  //   });
  // }
  // if (query.price != 'undefined') {
  //   console.log(query.price);
  //   const minPrice = Number((query.price as string).split('-')[0]);
  //   const maxPrice = Number((query.price as string).split('-')[1]);
  //   pipeline.push({
  //     $match: {
  //       mainCategory: 'television',
  //       offerPrice: { $gte: minPrice, $lte: maxPrice },
  //     },
  //   });
  // }
  // pipeline.push({
  //   $match: { mainCategory: 'television' },
  // });

  // let pipeline = [];
  // // Stage 1: Match mainCategory as 'television'
  // let matchStage: Record<string, unknown> = {
  //   mainCategory: 'television',
  // };

  // // Add screen size condition if provided
  // if (query.screen && query.screen !== 'undefined') {
  //   matchStage.size = query.screen;
  // }

  // // Add offerPrice range condition if provided
  // if (query.price && query.price !== 'undefined') {
  //   const [minPrice, maxPrice] = (query.price as string).split('-').map(Number);
  //   matchStage.offerPrice = { $gte: minPrice, $lte: maxPrice };
  // }

  // // Push the combined match stage into the pipeline
  // pipeline.push({
  //   $match: matchStage,
  // });

  const pipeline = getFilteringProducts(query, 'television', '');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};

// get single television by _id

export const getDingleTelevisionFromDB = async (_id: string) => {
  const product = await Products.find({ _id }).populate('specifications');
  return product;
};

//^ get led television
export const getLedTelevisionFromDB = async (
  query: Record<string, unknown>,
) => {
  // const product = await Products.find({ subCategory: 'led-tv' });

  const pipeline = getFilteringProducts(query, '', 'led-tv');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};

// get smart led television

export const getSmartLedTelevisionFromDB = async (
  query: Record<string, unknown>,
) => {
  const pipeline = getFilteringProducts(query, '', 'smart-led-tv');
  const products = await Products.aggregate([pipeline[0]]);
  return products;
};
