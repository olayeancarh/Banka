"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable max-len */

/* eslint-disable radix */
var AccountService = {
  addNewAccount: function addNewAccount(account) {
    var accountObj = account;
    var accountLenght = _dummyData["default"].accounts.length;

    var accountOwner = _dummyData["default"].users.find(function (user) {
      return user.id === accountObj.owner;
    });

    accountObj.id = _dummyData["default"].accounts[accountLenght - 1].id + 1;
    accountObj.firstName = accountOwner.firstName;
    accountObj.lastName = accountOwner.lastName;
    accountObj.email = accountOwner.email;

    _dummyData["default"].accounts.push(accountObj);

    return accountObj;
  },
  updateAnAccount: function updateAnAccount(account, accountNumber) {
    var accountObj = account;

    var accountInDb = _dummyData["default"].accounts.find(function (acc) {
      return acc.accountNumber === accountObj.accountNumber;
    });

    var accountObjIndex = _dummyData["default"].accounts.findIndex(function (accounts) {
      return accounts.accountNumber === accountNumber;
    });

    var accountOwner = _dummyData["default"].users.find(function (user) {
      return user.id === accountObj.owner;
    });

    var updatedAcct = {
      accountNumber: accountInDb.accountNumber,
      createdOn: accountInDb.createdOn,
      owner: accountInDb.owner,
      type: accountObj.type || accountInDb.type,
      status: accountObj.status || accountInDb.status,
      balance: accountObj.balance || accountInDb.balance,
      id: accountInDb.id
    };
    updatedAcct.firstName = accountOwner.firstName;
    updatedAcct.lastName = accountOwner.lastName;
    updatedAcct.email = accountOwner.email;
    updatedAcct.accountNumber = accountNumber;
    _dummyData["default"].accounts[accountObjIndex] = updatedAcct;
    return updatedAcct;
  },
  deleteAnAccount: function deleteAnAccount(accountNumber) {
    var getAccountIndex = _dummyData["default"].accounts.findIndex(function (account) {
      return account.accountNumber === accountNumber;
    });

    _dummyData["default"].accounts.splice(getAccountIndex, 1);
  }
};
var _default = AccountService;
exports["default"] = _default;
//# sourceMappingURL=account.service.js.map