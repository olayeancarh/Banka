"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _user = _interopRequireDefault(require("../controller/user.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Controller
var router = (0, _express.Router)();
router.post('/', _user["default"].addAUser);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=user.route.js.map