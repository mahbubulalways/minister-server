import { Router } from 'express';
import productRoute from '../modules/products/product/products.route';
import televisionRoute from '../modules/products/television/television.route';
import airConditionerRoute from '../modules/products/airConditioner/airConditioner.route';
import refrigeratorRoute from '../modules/products/refrigerator/refrigerator.route';
import washingMachineRoute from '../modules/products/washingMachine/washingMachine.route';
import microOvenRoutes from '../modules/products/microOven/microOven.route';
import humanCareRoutes from '../modules/products/humanCare/humanCare.route';
import homeApplianceRoutes from '../modules/products/homeAppliance/homeAppliance.route';
import userRoutes from '../modules/users/users.route';
import authRoutes from '../modules/auth/auth.route';
import cartRoutes from '../modules/cart/cart.route';
const router = Router();

const applicationRoutes = [
  {
    path: '/auth',
    route: authRoutes,
  },
  {
    path: '/user',
    route: userRoutes,
  },
  {
    path: '/products',
    route: productRoute,
  },
  {
    path: '/products/television',
    route: televisionRoute,
  },
  {
    path: '/products/air-conditioner',
    route: airConditionerRoute,
  },
  {
    path: '/products/refrigerator',
    route: refrigeratorRoute,
  },
  {
    path: '/products/washing-machine',
    route: washingMachineRoute,
  },
  {
    path: '/products/micro-oven',
    route: microOvenRoutes,
  },
  {
    path: '/products/human-care',
    route: humanCareRoutes,
  },
  {
    path: '/products/home-appliance',
    route: homeApplianceRoutes,
  },
  {
    path: '/cart',
    route: cartRoutes,
  },
];

applicationRoutes.forEach((route) => router.use(route.path, route.route));
export default router;
