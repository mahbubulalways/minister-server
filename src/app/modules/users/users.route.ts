import { Router } from 'express';
import { userController } from './users.controller';

const router = Router();

router.post('/create-account', userController.insertNewUserController);

export default router;
