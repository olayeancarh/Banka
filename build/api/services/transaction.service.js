"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

var _transaction = _interopRequireDefault(require("../models/transaction.models"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TransactionService =
/*#__PURE__*/
function () {
  function TransactionService() {
    _classCallCheck(this, TransactionService);
  }

  _createClass(TransactionService, null, [{
    key: "addNewTransaction",
    value: function addNewTransaction(transaction) {
      var transactionObj = transaction;
      var transactionLenght = _dummyData["default"].transactions.length;
      transactionObj.id = _dummyData["default"].transactions[transactionLenght - 1].id + 1;

      _dummyData["default"].transactions.push(transactionObj);

      return transactionObj;
    }
  }, {
    key: "fetchAllTransactions",
    value: function fetchAllTransactions() {
      return _dummyData["default"].transactions.map(function (transaction) {
        return new _transaction["default"](transaction.id, transaction.createdOn, transaction.type, transaction.accountNumber, transaction.cashier, transaction.amount, transaction.oldBalance, transaction.newBalance);
      });
    }
  }]);

  return TransactionService;
}();

var _default = TransactionService;
exports["default"] = _default;
//# sourceMappingURL=transaction.service.js.map