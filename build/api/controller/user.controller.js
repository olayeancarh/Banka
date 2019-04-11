"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("../services/user.service"));

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserController = {
  addAUser: function addAUser(req, res) {
    var newUser = req.body;

    var emailExists = _dummyData["default"].users.find(function (users) {
      return users.email === newUser.email;
    });

    if (emailExists) {
      return res.json({
        status: 401,
        data: 'This email is associated with a Banka account'
      });
    }

    if ([newUser.email, newUser.firstName, newUser.lastName, newUser.password].includes('')) {
      return res.json({
        status: 401,
        data: 'All fields are required'
      });
    }

    var createdUser = _user["default"].addNewUser(newUser);

    return res.json({
      status: 201,
      data: createdUser
    });
  }
};
var _default = UserController;
exports["default"] = _default;
//# sourceMappingURL=user.controller.js.map