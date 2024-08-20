import { Router } from 'express';
import { productController } from './products.controller';
productController;
const router = Router();

router.get('/all-products', productController.getAllProductController);
router.get(
  '/get-products-by-category/:category',
  productController.getProductByCategoryController,
);
router.get('/single-product/:id', productController.getSingleProductController);

export default router;
