"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transaction = _interopRequireDefault(require("../services/transaction.service"));

var _account = _interopRequireDefault(require("../services/account.service"));

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TransactionController =
/*#__PURE__*/
function () {
  function TransactionController() {
    _classCallCheck(this, TransactionController);
  }

  _createClass(TransactionController, null, [{
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