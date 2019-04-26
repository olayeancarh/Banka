import { Router } from 'express';
import UserController from '../controller/userController';
import AccountController from '../controller/accountController';
import middleware from '../utilz/middleware';

const router = Router();
const { checkToken } = middleware;

// ================= USER AUTHENTICATION ======================
router.post('/users/auth/signup', UserController.addAUser);
router.post('/users/auth/signin', UserController.userLogin);

// ================= ACCOUNT CONTROLLER =======================
router.post('/accounts', checkToken, AccountController.addAnAccount);

export default router;
