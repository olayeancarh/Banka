"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/* eslint-disable radix */
var TransactionService = {
  addNewTransaction: function addNewTransaction(transaction) {
    var transactionObj = transaction;
    var transactionLenght = _dummyData["default"].transactions.length;
    transactionObj.id = _dummyData["default"].transactions[transactionLenght - 1].id + 1;

    _dummyData["default"].transactions.push(transactionObj);

    return transactionObj;
  }
};
var _default = TransactionService;
exports["default"] = _default;
//# sourceMappingURL=transaction.service.js.map