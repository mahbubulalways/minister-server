import mongoose from 'mongoose';

const baseSpecificationsSchema = new mongoose.Schema(
  {
    productType: {
      type: String,
      required: true,
      enum: [
        'Television',
        'AirConditioner',
        'Refrigerator',
        'WashingMachine',
        'MicroOven',
        'HomeAppliance',
      ],
    },
  },
  { discriminatorKey: 'productType', collection: 'specifications' },
);

const Specification = mongoose.model('Specification', baseSpecificationsSchema);

export default Specification;
