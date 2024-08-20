export interface IWashingMachineSpecification {
  color: string;
  capacity: string;
  netDimension: string;
  netWeight: string;
  grossWeight: string;
  washPower: string;
  spinSpeed: string;
  waterLevel: string;
  innerTub: string;
  controlType: string;
  waterInlets: string;
  display: string;
  delayStartH: string;
  childLock: 'Yes' | 'No';
  washProgram: string[];
  cabinet: string;
  doorCover: string;
  diyProgram: 'Yes' | 'No';
  memoryBackup: 'Yes' | 'No';
  warranty: string;
}
