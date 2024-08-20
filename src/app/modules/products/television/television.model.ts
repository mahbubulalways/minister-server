import mongoose from 'mongoose';
import Specification from '../product/product.specification';
import { ITelevisionSpecifications } from './television.interface';

const televisionSpecificationsSchema =
  new mongoose.Schema<ITelevisionSpecifications>({
    color: { type: String },
    screenSize: { type: String },
    resolution: { type: String },
    viewingAngle: { type: String },
    soundSystem: { type: String },
    source: [{ type: String }],
    supportedVideoFormat: [{ type: String }],
    bodyDesign: { type: String },
    banglaSupportLanguage: { type: String },
    backlightAdjustable: { type: String },
    pictureMode: [{ type: String }],
    powerConsumption: { type: String },
    tvSystem: [{ type: String }],
    backlightType: { type: String },
    colorDepth: { type: String },
    aspectRatio: [{ type: String }],
    thunderProtective: { type: String },
    remote: { type: String },
    wallMountBracket: { type: String },
    contrastRatio: { type: String },
    brightness: { type: String },
    speaker: { type: String },
    channelProgram: { type: String },
    warranty: { type: String },
  });

const TelevisionSpecification = Specification.discriminator(
  'Television',
  televisionSpecificationsSchema,
);

export default TelevisionSpecification;
