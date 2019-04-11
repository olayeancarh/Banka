"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _account = _interopRequireDefault(require("../controller/account.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Controller
var router = (0, _express.Router)();
router.post('/', _account["default"].addAnAccount);
router.put('/:id', _account["default"].updateAnAccount);
router["delete"]('/delete/:id', _account["default"].deleteAnAccount);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=account.route.js.map