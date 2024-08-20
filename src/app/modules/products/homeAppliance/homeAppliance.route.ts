import { Router } from 'express';
import { homeApplianceController } from './homeAppliance.controller';

const router = Router();

router.post(
  '/insert-home-appliance',
  homeApplianceController.insertHomeApplianceController,
);
router.get(
  '/get-home-appliance',
  homeApplianceController.getAllHomeApplianceController,
);
router.get(
  '/home-appliance-category/:category',
  homeApplianceController.getAllCategoryHomeApplianceController,
);
router.get(
  '/home-appliance/:id',
  homeApplianceController.getAllCategoryHomeApplianceController,
);

export default router;
