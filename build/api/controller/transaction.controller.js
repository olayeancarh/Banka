"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _transaction = _interopRequireDefault(require("../services/transaction.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TransactionController = {
  addATransaction: function addATransaction(req, res) {
    var newTransaction = req.body;

    var createdTransaction = _transaction["default"].addNewTransaction(newTransaction);

    return res.json({
      status: 201,
      data: createdTransaction
    });
  }
};
var _default = TransactionController;
exports["default"] = _default;
//# sourceMappingURL=transaction.controller.js.map