"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _emailValidator = _interopRequireDefault(require("email-validator"));

var _user = _interopRequireDefault(require("../services/user.service"));

var _config = _interopRequireDefault(require("../utilz/config"));

var _helpers = _interopRequireDefault(require("../utilz/helpers"));

/* eslint-disable no-console */

/* eslint-disable consistent-return */
var UserController =
/*#__PURE__*/
function () {
  function UserController() {
    (0, _classCallCheck2["default"])(this, UserController);
  }

  (0, _createClass2["default"])(UserController, null, [{
    key: "addAUser",
    value: function addAUser(req, res) {
      var newUser = req.body;
      if (!_helpers["default"].userSignup(newUser)) return res.status(401).json({
        status: 401,
        data: 'Some fields are missing'
      });
      if (!_emailValidator["default"].validate(newUser.email)) return res.status(401).json({
        status: 401,
        data: 'Invalid email'
      });

      _bcryptjs["default"].hash(newUser.password, _config["default"].saltRounds, function (err, hash) {
        newUser.password = hash;

        var createdUser = _user["default"].addNewUser(newUser);

        createdUser.then(function (user) {
          if (user.routine === '_bt_check_unique') {
            return res.status(401).json({
              status: 401,
              data: 'Email already exists'
            });
          }

          _jsonwebtoken["default"].sign({
            email: newUser.email
          }, _config["default"].secret, function (_err, token) {
            // eslint-disable-next-line no-param-reassign
            user.rows[0].token = token;
            return res.status(201).json({
              status: 201,
              data: user.rows[0]
            });
          });
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
      if (!_helpers["default"].userSignin(email, password)) return res.status(401).json({
        status: 401,
        data: 'Some fields are missing'
      });
      if (!_emailValidator["default"].validate(email)) return res.status(401).json({
        status: 401,
        data: 'Invalid email'
      });

      _user["default"].userLogIn(email).then(function (user) {
        if (!user.rows[0]) {
          return res.status(404).json({
            status: 404,
            data: 'Authenticaation failed'
          });
        }

        _bcryptjs["default"].compare(password, user.rows[0].password).then(function (resp) {
          if (!resp) {
            return res.status(404).json({
              status: 404,
              data: 'Login failed'
            });
          }

          _jsonwebtoken["default"].sign({
            email: email
          }, _config["default"].secret, function (err, token) {
            // eslint-disable-next-line no-param-reassign
            user.rows[0].token = token;
            return res.status(201).json({
              status: 201,
              data: user.rows[0]
            });
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