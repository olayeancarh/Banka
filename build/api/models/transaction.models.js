"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Transaction = function Transaction(id, createdOn, type, accountNumber, cashier, amount, oldBalance, newBalance) {
  (0, _classCallCheck2["default"])(this, Transaction);
  this.id = id;
  this.createdOn = createdOn;
  this.type = type;
  this.accountNumber = accountNumber;
  this.cashier = cashier;
  this.amount = amount;
  this.oldBalance = oldBalance;
  this.newBalance = newBalance;
};

var _default = Transaction;
exports["default"] = _default;
//# sourceMappingURL=transaction.models.js.map