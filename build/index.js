"use strict";

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
var app = (0, _express["default"])(); // const hostname = '127.0.0.1';

var port = process.env.PORT || 5000;

var server = _http["default"].createServer(app);

app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to Banka'
  });
});
server.listen(port, function () {
  console.log("Server running at ".concat(port));
});
module.exports = app;
//# sourceMappingURL=index.js.map