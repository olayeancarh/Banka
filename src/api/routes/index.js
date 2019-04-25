import { Router } from 'express';
import UserController from '../controller/userController';

const router = Router();

// ================= USER AUTHENTICATION ======================
router.post('/users/auth/signup', UserController.addAUser);
router.post('/users/auth/signin', UserController.userLogin);

export default router;
