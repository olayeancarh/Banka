import { Router } from 'express';

// Controller
import AccountController from '../controller/account.controller';

const router = Router();

router.post('/', AccountController.addAnAccount);
router.post('/:id', AccountController.updateAnAccount);
router.get('/delete/:id', AccountController.deleteAnAccount);

export default router;
