//* product name

import { Types } from 'mongoose';
import { IRefrigeratorSpecification } from '../refrigerator/refrigerator.interface';

export interface IProductBasicInfo {
  name: string;
  images: string[];
  image: string;
  price: number;
  discount: number;
  offerPrice: number;
  mainCategory: string;
  subCategory: string;
  availability: string;
  size: string;
  productType: string;
  capacity?: string;
  sale?: boolean;
  isDeleted?: boolean;
  rating?: number;
  selling?: number;
  specifications: Types.ObjectId;
}

//* television Specifications
interface ITelevisionSpecifications {
  Color: string;
  ScreenSize: string;
  Resolution: string;
  ViewingAngle: string;
  SoundSystem: string;
  Source: string[];
  SupportedVideoFormat: string[];
  BodyDesign: string;
  BanglaSupportLanguage: string;
  BacklightAdjustable: string;
  PictureMode: string[];
  PowerConsumption: string;
  TVSystem: string[];
  BacklightType: string;
  ColorDepth: string;
  AspectRatio: string[];
  ThunderProtective: string;
  Remote: string;
  WallMountBracket: string;
  ContrastRatio: string;
  Brightness: string;
  Speaker: string;
  ChannelProgram: string;
  Warranty: string;
}

//* Air conditioner

interface TechnicalSpecifications {
  model: string;
  type: string;
  tonnage: string;
  function: string;
  btu_hr: string;
  voltage: string;
  ratedInputPowerW: string;
  ratedCurrentA: string;
  coolingCapacityW: string;
  eer_cop: string;
  airFlowM3h: string;
  compressorType: string;
  refrigerantType: string;
  refrigerantAmountKg: string;
  operatingRange: string;
  maximumPipeLength: string;
  roomSize: string;
  iFeelTechnology: string;
  antiBacterialAirFilter: string;
  allCopperTube: string;
  compressorGuaranty: string;
}

interface Operations {
  smartMode: string;
  turboCoolingMode: string;
  ecoMode: string;
  sleepMode: string;
  clockTimerMode: string;
  dimmerMode: string;
  quietMode: string;
  fanMode: string;
  dryMode: string;
  coolMode: string;
  autoRestart: string;
  temperatureUnitChange: string;
  fullCopperTube: string;
}

interface ACSpecifications {
  technicalSpecifications: TechnicalSpecifications;
  operations: Operations;
}

export interface IProduct {
  product: IProductBasicInfo;
  specifications:
    | ITelevisionSpecifications
    | ACSpecifications
    | IRefrigeratorSpecification;
}
