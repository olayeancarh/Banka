"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _transaction = _interopRequireDefault(require("../services/transaction.service"));

var _account = _interopRequireDefault(require("../services/account.service"));

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

var TransactionController =
/*#__PURE__*/
function () {
  function TransactionController() {
    (0, _classCallCheck2["default"])(this, TransactionController);
  }

  (0, _createClass2["default"])(TransactionController, null, [{
    key: "debitAccount",
    value: function debitAccount(req, res) {
      var newTransaction = req.body;
      var accountNumber = req.params.accountNumber;

      var account = _dummyData["default"].accounts.find(function (acct) {
        return acct.accountNumber === accountNumber;
      });

      newTransaction.oldBalance = account.balance;
      newTransaction.type = 'debit';

      if (newTransaction.amount > newTransaction.oldBalance) {
        return res.json({
          status: 201,
          data: 'Insufficient funds'
        });
      }

      newTransaction.newBalance = newTransaction.oldBalance - newTransaction.amount;
      account.balance = newTransaction.newBalance;

      var createdTransaction = _transaction["default"].addNewTransaction(newTransaction);

      _account["default"].updateAnAccount(account, accountNumber);

      return res.json({
        status: 201,
        data: createdTransaction
      });
    }
  }, {
    key: "creditAccount",
    value: function creditAccount(req, res) {
      var newTransaction = req.body;
      var accountNumber = req.params.accountNumber;

      var account = _dummyData["default"].accounts.find(function (acct) {
        return acct.accountNumber === accountNumber;
      });

      newTransaction.oldBalance = account.balance;
      newTransaction.type = 'credit';
      newTransaction.newBalance = newTransaction.oldBalance + newTransaction.amount;
      account.balance = newTransaction.newBalance;

      var createdTransaction = _transaction["default"].addNewTransaction(newTransaction);

      _account["default"].updateAnAccount(account, accountNumber);

      return res.json({
        status: 201,
        data: createdTransaction
      });
    }
  }, {
    key: "fetchAllTransactions",
    value: function fetchAllTransactions(req, res) {
      var allTransactions = _transaction["default"].fetchAllTransactions();

      return res.json({
        status: 200,
        data: allTransactions
      }).status(200);
    }
  }]);
  return TransactionController;
}();

var _default = TransactionController;
exports["default"] = _default;
//# sourceMappingURL=transactionController.js.map