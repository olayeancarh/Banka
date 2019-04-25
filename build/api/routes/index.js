"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _userController = _interopRequireDefault(require("../controller/userController"));

var router = (0, _express.Router)(); // ================= USER AUTHENTICATION ======================

router.post('/users/auth/signup', _userController["default"].addAUser);
router.post('/users/auth/signin', _userController["default"].userLogin);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=index.js.map