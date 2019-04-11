"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transaction = _interopRequireDefault(require("../services/transaction.service"));

var _account = _interopRequireDefault(require("../services/account.service"));

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TransactionController = {
  addATransaction: function addATransaction(req, res) {
    var newTransaction = req.body;
    var accountNumber = req.params.accountNumber;

    var account = _dummyData["default"].accounts.find(function (acct) {
      return acct.accountNumber === accountNumber;
    });

    newTransaction.oldBalance = account.balance;

    if (newTransaction.type === 'credit') {
      newTransaction.newBalance = newTransaction.oldBalance + newTransaction.amount;
    } else if (newTransaction.type === 'debit') {
      if (newTransaction.amount > newTransaction.oldBalance) {
        return res.json({
          status: 201,
          data: 'Insufficient funds'
        });
      }

      newTransaction.newBalance = newTransaction.oldBalance - newTransaction.amount;
    }

    account.balance = newTransaction.newBalance;

    var createdTransaction = _transaction["default"].addNewTransaction(newTransaction);

    _account["default"].updateAnAccount(account, accountNumber);

    return res.json({
      status: 201,
      data: createdTransaction
    });
  }
};
var _default = TransactionController;
exports["default"] = _default;
//# sourceMappingURL=transaction.controller.js.map