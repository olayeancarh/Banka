"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _emailValidator = _interopRequireDefault(require("email-validator"));

var _user = _interopRequireDefault(require("../services/user.service"));

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

      if ([newUser.email, newUser.firstName, newUser.lastName, newUser.password, newUser.type, newUser.isAdmin].includes('')) {
        return res.status(401).json({
          status: 401,
          data: 'All fields are required'
        });
      }

      if (!_emailValidator["default"].validate(newUser.email)) {
        return res.status(401).json({
          status: 401,
          data: 'Invalid Email'
        });
      }

      _bcrypt["default"].hash(newUser.password, _config["default"].saltRounds, function (err, hash) {
        newUser.password = hash;

        var createdUser = _user["default"].addNewUser(newUser);

        createdUser.then(function (user) {
          if (user.routine === '_bt_check_unique') {
            return res.status(401).json({
              status: 401,
              data: 'Email already exists'
            });
          }

          return res.status(201).json({
            status: 201,
            data: user.rows[0]
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

      var validMail = _emailValidator["default"].validate(email);

      if ([email, password].includes('') || !validMail) {
        var data = !validMail ? 'Invalid email' : 'Some values are mising';
        return res.status(404).json({
          status: 404,
          data: data
        });
      }

      var loggedInUser = _user["default"].userLogIn(email);

      loggedInUser.then(function (user) {
        if (!user.rows[0]) {
          return res.status(404).json({
            status: 404,
            data: 'Authenticaation failed'
          });
        }

        _bcrypt["default"].compare(password, user.rows[0].password).then(function (resp) {
          if (!resp) {
            return res.json({
              status: 404,
              data: 'Login failed'
            });
          }

          _jsonwebtoken["default"].sign({
            email: email
          }, _config["default"].secret, function (err, token) {
            // eslint-disable-next-line no-param-reassign
            user.rows[0].token = token;
            return res.json({
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