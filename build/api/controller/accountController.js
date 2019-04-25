"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _account = _interopRequireDefault(require("../services/account.service"));

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

var AccountController =
/*#__PURE__*/
function () {
  function AccountController() {
    (0, _classCallCheck2["default"])(this, AccountController);
  }

  (0, _createClass2["default"])(AccountController, null, [{
    key: "addAnAccount",
    value: function addAnAccount(req, res) {
      var newAccount = req.body;

      var createdAccount = _account["default"].addNewAccount(newAccount);

      return res.json({
        status: 201,
        data: createdAccount
      });
    }
  }, {
    key: "updateAnAccount",
    value: function updateAnAccount(req, res) {
      var oldAccount = req.body;
      var accountNumber = req.params.accountNumber;

      var accountInDb = _dummyData["default"].accounts.find(function (acc) {
        return acc.accountNumber === accountNumber;
      });

      if (!accountInDb) {
        return res.json({
          status: 401,
          data: 'The account number does not exist'
        });
      }

      var updatedAccount = _account["default"].updateAnAccount(oldAccount, accountNumber);

      return res.json({
        status: 201,
        data: updatedAccount
      }).status(201);
    }
  }, {
    key: "deleteAnAccount",
    value: function deleteAnAccount(req, res) {
      var accountNumber = req.params.accountNumber;

      _account["default"].deleteAnAccount(accountNumber);

      return res.json({
        status: 201,
        message: 'Account successfully deleted'
      }).status(201);
    }
  }, {
    key: "fetchAllAccounts",
    value: function fetchAllAccounts(req, res) {
      var allAccounts = _account["default"].fetchAllAccounts();

      return res.json({
        status: 200,
        data: allAccounts
      }).status(200);
    }
  }, {
    key: "fetchAnAccount",
    value: function fetchAnAccount(req, res) {
      var accountNumber = req.params.accountNumber;

      var account = _account["default"].fetchAnAccount(accountNumber);

      return res.json({
        status: 200,
        data: account
      }).status(200);
    }
  }]);
  return AccountController;
}();

var _default = AccountController;
exports["default"] = _default;
//# sourceMappingURL=accountController.js.map