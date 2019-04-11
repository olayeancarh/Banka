"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _account = _interopRequireDefault(require("../services/account.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var AccountController = {
  addAnAccount: function addAnAccount(req, res) {
    var newAccount = req.body;

    var createdAccount = _account["default"].addNewAccount(newAccount);

    return res.json({
      status: 201,
      data: createdAccount
    });
  },
  updateAnAccount: function updateAnAccount(req, res) {
    var oldAccount = req.body;
    var id = req.params.id;

    var updatedAccount = _account["default"].updateAnAccount(oldAccount, id);

    return res.json({
      status: 201,
      data: updatedAccount
    }).status(201);
  },
  deleteAnAccount: function deleteAnAccount(req, res) {
    var id = req.params.id.id;

    _account["default"].deleteAnAccount(id);

    return res.json({
      status: 201,
      message: 'Account successfully deleted'
    }).status(201);
  }
};
var _default = AccountController;
exports["default"] = _default;
//# sourceMappingURL=account.controller.js.map