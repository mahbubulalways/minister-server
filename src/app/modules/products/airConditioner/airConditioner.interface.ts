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

export interface IACSpecifications {
  technicalSpecifications: TechnicalSpecifications;
  operations: Operations;
}
