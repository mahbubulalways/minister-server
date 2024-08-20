import { Router } from 'express';
import { airConditionerController } from './airConditioner.controller';
airConditionerController;

const router = Router();

router.post(
  '/insert-air-conditioner',
  airConditionerController.insertAirConditionerController,
);
router.get(
  '/get-air-conditioner',
  airConditionerController.getAirConditionerController,
);
router.get(
  '/get-air-conditioner/split-ac',
  airConditionerController.getSplitAirConditionerController,
);
router.get(
  '/get-air-conditioner/ceiling-ac',
  airConditionerController.getCeilAirConditionerController,
);
router.get(
  '/get-air-conditioner/:id',
  airConditionerController.getSingleAirConditionerController,
);

export default router;
