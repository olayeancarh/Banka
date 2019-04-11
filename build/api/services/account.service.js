"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable radix */
var AccountService = {
  addNewAccount: function addNewAccount(account) {
    var accountObj = account;
    var accountLenght = _dummyData["default"].accounts.length;
    accountObj.id = _dummyData["default"].accounts[accountLenght - 1].id + 1;

    _dummyData["default"].accounts.push(accountObj);

    return accountObj;
  },
  updateAnAccount: function updateAnAccount(account, id) {
    var accountObj = account;

    var accountObjIndex = _dummyData["default"].accounts.findIndex(function (accounts) {
      return accounts.id === parseInt(id);
    });

    accountObj.id = id;
    _dummyData["default"].accounts[accountObjIndex] = accountObj;
    return accountObj;
  },
  deleteAnAccount: function deleteAnAccount(id) {
    var getAccountIndex = _dummyData["default"].accounts.findIndex(function (account) {
      return account.id === parseInt(id);
    });

    _dummyData["default"].accounts.splice(getAccountIndex, 1);
  }
};
var _default = AccountService;
exports["default"] = _default;
//# sourceMappingURL=account.service.js.map