import { Router } from 'express';
import { televisionController } from './television.controller';

const router = Router();

router.post(
  '/insert-television',
  televisionController.insertTelevisionController,
);
router.get('/get-television', televisionController.getTelevisionController);
router.get(
  '/get-television/led-tv',
  televisionController.getLedTelevisionController,
);
router.get(
  '/get-television/smart-led-tv',
  televisionController.getSmartLedTelevisionController,
);
router.get(
  '/get-television/:id',
  televisionController.getSingleTelevisionController,
);

export default router;
