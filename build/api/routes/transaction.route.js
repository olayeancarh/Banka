"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _transaction = _interopRequireDefault(require("../controller/transaction.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Controller
var router = (0, _express.Router)();
router.post('/', _transaction["default"].addATransaction);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=transaction.route.js.map