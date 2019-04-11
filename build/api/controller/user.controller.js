"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("../services/user.service"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserController = {
  addAUser: function addAUser(req, res) {
    var newUser = req.body;

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