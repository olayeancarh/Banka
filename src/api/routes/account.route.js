import { Router } from 'express';

// Controller
import AccountController from '../controller/account.controller';

const router = Router();

router.post('/', AccountController.addAnAccount);
router.put('/:accountNumber', AccountController.updateAnAccount);
router.delete('/delete/:accountNumber', AccountController.deleteAnAccount);

export default router;
