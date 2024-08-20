import { Router } from 'express';
import { washingMachineController } from './washingMachine.controller';

const router = Router();

router.post(
  '/insert-washing-machine',
  washingMachineController.insertWashingMachineController,
);
router.get(
  '/get-washing-machine',
  washingMachineController.getWashingMachineController,
);
router.get(
  '/get-washing-machine/automatic-top-load',
  washingMachineController.getTopLoadWashingMachineController,
);
router.get(
  '/get-washing-machine/automatic-front-load',
  washingMachineController.getFrontLoadWashingMachineController,
);
router.get(
  '/get-washing-machine/:id',
  washingMachineController.getSingleWashingMachineController,
);

export default router;
