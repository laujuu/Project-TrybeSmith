import { Router } from 'express';
import UserController from '../controllers/users.controller';

const router = Router();

const userController = new UserController();

router.post('/', userController.createUser.bind(userController));

export default router;