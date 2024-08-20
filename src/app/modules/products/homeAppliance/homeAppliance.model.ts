import mongoose from 'mongoose';
import { IHomeApplianceSpecification } from './homeAppliance.interface';
import Specification from '../product/product.specification';

const homeApplianceSchema = new mongoose.Schema<IHomeApplianceSpecification>({
  features: {
    type: [String],
    required: [true, 'Features are required'],
  },
});

const HomeApplianceSpecification = Specification.discriminator(
  'HomeAppliance',
  homeApplianceSchema,
);
export default HomeApplianceSpecification;
