import { IProductBasicInfo } from '../product/products.interface';
import Products from '../product/products.model';
import { IHomeApplianceSpecification } from './homeAppliance.interface';
import HomeApplianceSpecification from './homeAppliance.model';

//* insert HomeAppliance
export const insertHomeApplianceIntoDB = async (
  product: IProductBasicInfo,
  specification: IHomeApplianceSpecification,
) => {
  console.log(specification);
  const homeApplianceSpecification =
    await HomeApplianceSpecification.create(specification);
  if (homeApplianceSpecification?._id) {
    product.specifications = homeApplianceSpecification?._id;
    const productInfo = await Products.create(product);
    return productInfo;
  }
  return;
};
//

//* get all HomeAppliance without specification
export const getAllHomeApplianceFromDB = async () => {
  const products = await Products.find({ mainCategory: 'home-appliance' });
  return products;
};
//
//

//* get home appliance by category
export const getCategoryHomeApplianceCareFromDB = async (payload: string) => {
  const products = await Products.find({ subCategory: { payload } });
  return products;
};

//* get single HomeAppliance by _id
export const getSingleHomeApplianceFromDB = async (_id: string) => {
  const product = await Products.find({ _id }).populate('specifications');
  return product;
};
//
