import { Router } from 'express';

// Controller
import UserController from '../controller/user.controller';

const router = Router();

router.post('/', UserController.addAUser);
router.post('/auth/signin', UserController.userLogin);

export default router;
