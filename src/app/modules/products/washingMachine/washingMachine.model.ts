import mongoose from 'mongoose';
import { IWashingMachineSpecification } from './washingMachine.interface';
import Specification from '../product/product.specification';

const washingMachineSchema = new mongoose.Schema<IWashingMachineSpecification>({
  color: { type: String, required: true },
  capacity: { type: String, required: true },
  netDimension: { type: String, required: true },
  netWeight: { type: String, required: true },
  grossWeight: { type: String, required: true },
  washPower: { type: String, required: true },
  spinSpeed: { type: String, required: true },
  waterLevel: { type: String, required: true },
  innerTub: { type: String, required: true },
  controlType: { type: String, required: true },
  waterInlets: { type: String, required: true },
  display: { type: String, required: true },
  delayStartH: { type: String, required: true },
  childLock: { type: String, enum: ['Yes', 'No'], required: true },
  washProgram: { type: [String], required: true },
  cabinet: { type: String, required: true },
  doorCover: { type: String, required: true },
  diyProgram: { type: String, enum: ['Yes', 'No'], required: true },
  memoryBackup: { type: String, enum: ['Yes', 'No'], required: true },
  warranty: { type: String, required: true },
});

const WashingMachineSpecification = Specification.discriminator(
  'WashingMachine',
  washingMachineSchema,
);

export default WashingMachineSpecification;
