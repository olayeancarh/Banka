import { Router } from 'express';

// Controller
import TransactionController from '../controller/transaction.controller';

const router = Router();

router.post('/:accountNumber', TransactionController.addATransaction);

export default router;
