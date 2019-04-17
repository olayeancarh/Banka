import { Router } from 'express';
import UserController from '../controller/userController';
import AccountController from '../controller/accountController';
import TransactionController from '../controller/transactionController';

import middleware from '../utilz/middleware';

const router = Router();
const { checkToken } = middleware;

// ================= USER AUTHENTICATION ======================
router.post('/users/auth/signup', UserController.addAUser);
router.post('/users/auth/signin', UserController.userLogin);

// ================= ACCOUNT CONTROLLER =======================
router.post('/accounts', checkToken, AccountController.addAnAccount);
router.put('/accounts/:accountNumber', checkToken, AccountController.updateAnAccount);
router.delete('/accounts/:accountNumber', checkToken, AccountController.deleteAnAccount);
router.get('/accounts', checkToken, AccountController.fetchAllAccounts);
router.get('/accounts/:accountNumber', checkToken, AccountController.fetchAnAccount);

// ================= TRANSACTION CONTROLLER ===================
router.post('/transactions/:accountNumber/credit', checkToken, TransactionController.creditAccount);
router.post('/transactions/:accountNumber/debit', checkToken, TransactionController.debitAccount);
router.get('/transactions', checkToken, TransactionController.fetchAllTransactions);

export default router;
