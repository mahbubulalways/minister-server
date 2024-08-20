import { Router } from 'express';
import { microOvenController } from './microOven.controller';

const router = Router();

router.post(
  '/insert-micro-oven',
  microOvenController.insertMicroOvenController,
);
router.get('/get-micro-oven', microOvenController.getAllOvenController);
router.get(
  '/get-micro-oven/:id',
  microOvenController.getSingleMicroOvenController,
);

export default router;
