import { Router } from 'express';

// Controller
import AccountController from '../controller/account.controller';

const router = Router();

router.post('/', AccountController.addAnAccount);
router.put('/:id', AccountController.updateAnAccount);
router.delete('/delete/:id', AccountController.deleteAnAccount);

export default router;
