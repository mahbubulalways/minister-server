import mongoose from 'mongoose';
import Specification from '../product/product.specification';

const technicalSpecificationsSchema = new mongoose.Schema({
  model: { type: String },
  type: { type: String },
  tonnage: { type: String },
  function: { type: String },
  btu_hr: { type: String },
  voltage: { type: String },
  ratedInputPowerW: { type: String },
  ratedCurrentA: { type: String },
  coolingCapacityW: { type: String },
  eer_cop: { type: String },
  airFlowM3h: { type: String },
  compressorType: { type: String },
  refrigerantType: { type: String },
  refrigerantAmountKg: { type: String },
  operatingRange: { type: String },
  maximumPipeLength: { type: String },
  roomSize: { type: String },
  iFeelTechnology: { type: String },
  antiBacterialAirFilter: { type: String },
  allCopperTube: { type: String },
  compressorGuaranty: { type: String },
});

const operationsSchema = new mongoose.Schema({
  smartMode: { type: String },
  turboCoolingMode: { type: String },
  ecoMode: { type: String },
  sleepMode: { type: String },
  clockTimerMode: { type: String },
  dimmerMode: { type: String },
  quietMode: { type: String },
  fanMode: { type: String },
  dryMode: { type: String },
  coolMode: { type: String },
  autoRestart: { type: String },
  temperatureUnitChange: { type: String },
  fullCopperTube: { type: String },
});

const acSpecificationsSchema = new mongoose.Schema({
  technicalSpecifications: technicalSpecificationsSchema,
  operations: operationsSchema,
});

const ACSpecification = Specification.discriminator(
  'AirConditioner',
  acSpecificationsSchema,
);

export default ACSpecification;
