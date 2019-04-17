"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _user = _interopRequireDefault(require("../services/user.service"));

var _dummyData = _interopRequireDefault(require("../utilz/dummyData"));

var _config = _interopRequireDefault(require("../utilz/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    _classCallCheck(this, UserController);
  }

  _createClass(UserController, null, [{
    key: "addAUser",
    value: function addAUser(req, res) {
      var newUser = req.body;

      var emailExists = _dummyData["default"].users.find(function (users) {
        return users.email === newUser.email;
      });

      var saltRounds = 10;

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

      _bcrypt["default"].hash(newUser.password, saltRounds, function (err, hash) {
        newUser.password = hash;

        var createdUser = _user["default"].addNewUser(newUser); // createdUser.password = '';


        return res.json({
          status: 201,
          data: createdUser
        });
      });
    }
  }, {
    key: "userLogin",
    value: function userLogin(req, res) {
      // let myToken;
      var _req$body = req.body,
          email = _req$body.email,
          password = _req$body.password;

      var emailExists = _dummyData["default"].users.find(function (user) {
        return user.email === email;
      });

      if (!emailExists) {
        return res.json({
          status: 404,
          data: 'Authentication failed'
        });
      }

      _bcrypt["default"].compare(password, emailExists.password).then(function (resp) {
        if (!resp) {
          return res.json({
            status: 404,
            data: 'Login failed'
          });
        }

        _jsonwebtoken["default"].sign({
          email: email
        }, _config["default"].secret, function (err, token) {
          emailExists.token = token;
          emailExists.password = '';
          return res.json({
            status: 201,
            data: emailExists
          });
        });
      });
    }
  }]);

  return UserController;
}();

var _default = UserController;
exports["default"] = _default;
//# sourceMappingURL=userController.js.map