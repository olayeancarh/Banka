"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: "hashPassword",

    /**
     * Hash Password Method
     * @param {string} password
     * @returns {string} returns hashed password
     */
    value: function hashPassword(password) {
      return _bcrypt["default"].hashSync(password, _bcrypt["default"].genSaltSync(8));
    }
    /**
     * comparePassword
     * @param {string} hashPassword
     * @param {string} password
     * @returns {Boolean} return True or False
     */

  }, {
    key: "comparePassword",
    value: function comparePassword(hashPassword, password) {
      return _bcrypt["default"].compareSync(password, hashPassword);
    }
    /**
     * Gnerate Token
     * @param {string} id
     * @returns {string} token
     */

  }, {
    key: "generateToken",
    value: function generateToken(id) {
      return _jsonwebtoken["default"].sign({
        id: id
      }, _config["default"].secret, {
        expiresIn: '7d'
      });
    }
  }]);

  return Helper;
}();

var _default = Helper;
exports["default"] = _default;
//# sourceMappingURL=helpers.js.map