"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var Account = function Account(id, accountNumber, createdOn, owner, type, status, balance) {
  (0, _classCallCheck2["default"])(this, Account);
  this.id = id;
  this.accountNumber = accountNumber;
  this.createdOn = createdOn;
  this.owner = owner;
  this.type = type;
  this.status = status;
  this.balance = balance;
};

var _default = Account;
exports["default"] = _default;
//# sourceMappingURL=account.models.js.map