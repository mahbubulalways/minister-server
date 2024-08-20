import mongoose from 'mongoose';
import Specification from '../product/product.specification';
import { IOvenSpecifications } from './microOven.interface';

const ovenSpecificationsSchema = new mongoose.Schema<IOvenSpecifications>({
  powerConsumption: {
    type: String,
    required: true,
  },
  output: {
    type: String,
    required: true,
  },
  operationFrequency: {
    type: String,
    required: true,
  },
  timer: {
    type: String,
    required: true,
  },
  microwavePowerLevels: {
    type: Number,
    required: true,
  },
  turntableGlassTray: {
    type: String,
    required: true,
  },
  defrostSetting: {
    type: String,
    default: '',
  },
  housingAndCavity: {
    type: String,
    required: true,
  },
  handle: {
    type: String,
    required: true,
  },
  cookingEndSignal: {
    type: String,
    enum: ['yes', 'no'],
    default: 'yes',
  },
  outsideDimensions: {
    type: String,
    required: true,
  },
  ovenCavityDimensions: {
    type: String,
    required: true,
  },
  ovenCapacity: {
    type: String,
    required: true,
  },
  cookingUniformity: {
    type: String,
    required: true,
  },
  netWeight: {
    type: String,
    required: true,
  },
});

const OvenSpecification = Specification.discriminator(
  'MicroOven',
  ovenSpecificationsSchema,
);

export default OvenSpecification;
