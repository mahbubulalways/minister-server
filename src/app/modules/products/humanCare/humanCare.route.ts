import { Router } from 'express';
import { humanCareController } from './humanCare.controller';

const router = Router();

router.post(
  '/insert-human-care',
  humanCareController.insertHumanCareController,
);
router.get('/get-human-care', humanCareController.getAllHumanCareController);
router.get(
  '/get-human-care/:id',
  humanCareController.getSingleHumanCareController,
);

export default router;
