"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _userController = _interopRequireDefault(require("../controller/userController"));

var _accountController = _interopRequireDefault(require("../controller/accountController"));

var _transactionController = _interopRequireDefault(require("../controller/transactionController"));

var _middleware = _interopRequireDefault(require("../utilz/middleware"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();
var checkToken = _middleware["default"].checkToken; // ================= USER AUTHENTICATION ======================

router.post('/users/auth/signup', _userController["default"].addAUser);
router.post('/users/auth/signin', _userController["default"].userLogin); // ================= ACCOUNT CONTROLLER =======================

router.post('/accounts', checkToken, _accountController["default"].addAnAccount);
router.put('/accounts/:accountNumber', checkToken, _accountController["default"].updateAnAccount);
router["delete"]('/accounts/:accountNumber', checkToken, _accountController["default"].deleteAnAccount);
router.get('/accounts', checkToken, _accountController["default"].fetchAllAccounts);
router.get('/accounts/:accountNumber', checkToken, _accountController["default"].fetchAnAccount); // ================= TRANSACTION CONTROLLER ===================

router.post('/transactions/:accountNumber/credit', checkToken, _transactionController["default"].creditAccount);
router.post('/transactions/:accountNumber/debit', checkToken, _transactionController["default"].debitAccount);
router.get('/transactions', checkToken, _transactionController["default"].fetchAllTransactions);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map