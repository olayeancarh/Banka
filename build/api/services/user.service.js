"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var UserService = {
  addNewUser: function addNewUser(user) {
    var userObj = user;
    var userLenght = _dummyData["default"].users.length;
    userObj.id = _dummyData["default"].users[userLenght - 1].id + 1;

    _dummyData["default"].users.push(userObj);

    return userObj;
  }
};
var _default = UserService;
exports["default"] = _default;
//# sourceMappingURL=user.service.js.map