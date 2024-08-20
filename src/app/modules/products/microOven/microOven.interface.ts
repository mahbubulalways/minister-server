export interface IOvenSpecifications {
  powerConsumption: string;
  output: string;
  operationFrequency: string;
  timer: string;
  microwavePowerLevels: number;
  turntableGlassTray: string;
  defrostSetting: string; // Default to an empty string if not provided
  housingAndCavity: string;
  handle: string;
  cookingEndSignal: 'yes' | 'no';
  outsideDimensions: string;
  ovenCavityDimensions: string;
  ovenCapacity: string;
  cookingUniformity: string;
  netWeight: string;
}
