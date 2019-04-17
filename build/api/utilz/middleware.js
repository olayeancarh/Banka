"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("./config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable consistent-return */
function checkToken(req, res, next) {
  // Get auth header value
  var bearerHeader = req.headers.authorization; // Check if bearer is undefined

  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    var bearer = bearerHeader.split(' '); // Get token from array

    var bearerToken = bearer[1];

    _jsonwebtoken["default"].verify(bearerToken, _config["default"].secret, function (err, decoded) {
      if (err) {
        return res.json({
          success: false,
          message: "Token is not valid ".concat(err)
        });
      }

      req.decoded = decoded;
      next();
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied'
    });
  }
}

var _default = {
  checkToken: checkToken
};
exports["default"] = _default;
//# sourceMappingURL=middleware.js.map