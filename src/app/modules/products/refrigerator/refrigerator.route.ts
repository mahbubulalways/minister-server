import { Router } from 'express';
import { refrigeratorController } from './refrigerator.controller';
refrigeratorController;

const router = Router();

// * post new refrigerator
router.post(
  '/insert-refrigerator',
  refrigeratorController.insertRefrigeratorController,
);
//

// * get refrigerator with main category
router.get(
  '/get-refrigerator',
  refrigeratorController.getRefrigeratorController,
);
//

// * get refrigerator with sub category, direct-cool-refrigerator
router.get(
  '/get-refrigerator/direct-cool-refrigerator',
  refrigeratorController.getDirectCoolRefrigeratorController,
);
//

// * get refrigerator with sub category, non-frost-refrigerator
router.get(
  '/get-refrigerator/non-frost-refrigerator',
  refrigeratorController.getNonFrostRefrigeratorController,
);
//

// * get refrigerator with sub category, freezer-refrigerator
router.get(
  '/get-refrigerator/freezer-refrigerator',
  refrigeratorController.getFreezerRefrigeratorController,
);

//

router.get(
  '/get-refrigerator/:id',
  refrigeratorController.getSingleRefrigeratorController,
);

export default router;
