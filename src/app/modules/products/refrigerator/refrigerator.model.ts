import mongoose from 'mongoose';
import Specification from '../product/product.specification';
import { IRefrigeratorSpecification } from './refrigerator.interface';

const refrigeratorSchema = new mongoose.Schema<IRefrigeratorSpecification>({
  freezerCapacity: {
    type: String,
    required: [true, 'Freezer capacity is required'],
  },
  refrigeratorCapacity: {
    type: String,
    required: [true, 'Refrigerator capacity is required'],
  },
  coolingType: {
    type: String,
    required: [true, 'Cooling type is required'],
  },
  doorQuantity: {
    type: String,
    required: [true, 'Door quantity is required'],
  },
  freezerType: {
    type: String,
    required: [true, 'Freezer type is required'],
  },
  doorLock: {
    type: String,
    required: [true, 'Door lock information is required'],
  },
  refrigerant: {
    type: String,
    required: [true, 'Refrigerant is required'],
  },
  refrigerantCharge: {
    type: String,
    required: [true, 'Refrigerant charge is required'],
  },
  blowingAgentOfPUFoam: {
    type: String,
    required: [true, 'Blowing agent of PU foam is required'],
  },
  innerLiner: {
    type: String,
    required: [true, 'Inner liner material is required'],
  },
  doorPlate: {
    type: String,
    required: [true, 'Door plate material is required'],
  },
  sidePanel: {
    type: String,
    required: [true, 'Side panel material is required'],
  },
  backPanel: {
    type: String,
    required: [true, 'Back panel material is required'],
  },
  power: {
    type: String,
    required: [true, 'Power consumption is required'],
  },
  compressorVoltageRange: {
    type: String,
    required: [true, 'Compressor voltage range is required'],
  },
  ratedVoltage: {
    type: String,
    required: [true, 'Rated voltage is required'],
  },
  ratedCurrent: {
    type: String,
    required: [true, 'Rated current is required'],
  },
  ratedFrequency: {
    type: String,
    required: [true, 'Rated frequency is required'],
  },
  builtInStabilizer: {
    type: String,
    required: [true, 'Built-in stabilizer information is required'],
  },
  dimensions: {
    type: String,
    required: [true, 'Dimensions are required'],
  },
  grossCapacity: {
    type: String,
    required: [true, 'Gross capacity is required'],
  },
  CFT: {
    type: String,
    required: [true, 'CFT (Cubic Feet) is required'],
  },
  netWeight: {
    type: String,
    required: [true, 'Net weight is required'],
  },
});

const RefrigeratorSpecification = Specification.discriminator(
  'Refrigerator',
  refrigeratorSchema,
);

export default RefrigeratorSpecification;
