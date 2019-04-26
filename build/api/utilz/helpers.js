"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var Helper =
/*#__PURE__*/
function () {
  function Helper() {
    (0, _classCallCheck2["default"])(this, Helper);
  }

  (0, _createClass2["default"])(Helper, null, [{
    key: "userSignup",

    /**
     * Validate empty params for sign up
     * @param {object} user
     * @returns {Boolean} return true or false
     */
    value: function userSignup(user) {
      if (!user.email || !user.password || !user.firstName || !user.lastName) return false;
      return true;
    }
    /**
     * Validate empty params for sign up
     * @param {string} email
     * @param {string} password
     * @returns {Boolean} return true or false
     */

  }, {
    key: "userSignin",
    value: function userSignin(email, password) {
      if (!email || !password) return false;
      return true;
    }
  }]);
  return Helper;
}();

var _default = Helper;
exports["default"] = _default;
//# sourceMappingURL=helpers.js.map