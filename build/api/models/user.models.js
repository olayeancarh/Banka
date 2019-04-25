"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var User = function User(id, email, firstName, lastName, password, type, isAdmin) {
  (0, _classCallCheck2["default"])(this, User);
  this.id = id;
  this.email = email;
  this.firstName = firstName;
  this.lastName = lastName;
  this.password = password;
  this.type = type;
  this.isAdmin = isAdmin;
};

var _default = User;
exports["default"] = _default;
//# sourceMappingURL=user.models.js.map