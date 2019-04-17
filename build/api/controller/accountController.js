"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _account = _interopRequireDefault(require("../services/account.service"));

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AccountController =
/*#__PURE__*/
function () {
  function AccountController() {
    _classCallCheck(this, AccountController);
  }

  _createClass(AccountController, null, [{
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