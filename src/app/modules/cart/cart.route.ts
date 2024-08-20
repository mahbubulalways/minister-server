import { Router } from 'express';
import { cartController } from './cart.controller';

const router = Router();

router.post('/add-to-cart', cartController.addToCartController);
router.get('/get-cart/:email', cartController.getCartController);

export default router;
