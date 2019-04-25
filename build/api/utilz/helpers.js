"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _bcrypt = _interopRequireDefault(require("bcrypt"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("./config"));

// src/usingDB/controllers/Helper.js
var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    (0, _classCallCheck2["default"])(this, Helper);
  }

  (0, _createClass2["default"])(Helper, null, [{
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