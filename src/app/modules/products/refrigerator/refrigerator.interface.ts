export interface IRefrigeratorSpecification {
  freezerCapacity: string;
  refrigeratorCapacity: string;
  coolingType: string;
  doorQuantity: string;
  freezerType: string;
  doorLock: string;
  refrigerant: string;
  refrigerantCharge: string; // in grams
  blowingAgentOfPUFoam: string;
  innerLiner: string;
  doorPlate: string;
  sidePanel: string;
  backPanel: string;
  power: string; // in watts
  compressorVoltageRange: string;
  ratedVoltage: string;
  ratedCurrent: string; // in amperes
  ratedFrequency: string; // in hertz
  builtInStabilizer: string;
  dimensions: string;
  grossCapacity: string; // in liters
  CFT: string; // overall dimension in cubic feet
  netWeight: string; // in kg
}
