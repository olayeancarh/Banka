"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _http = _interopRequireDefault(require("http"));

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _user = _interopRequireDefault(require("./api/routes/user.route"));

var _account = _interopRequireDefault(require("./api/routes/account.route"));

var _transaction = _interopRequireDefault(require("./api/routes/transaction.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-console */
// Routes
var app = (0, _express["default"])(); // const hostname = '127.0.0.1';

var port = process.env.PORT || 5000;

var server = _http["default"].createServer(app);

app.use((0, _morgan["default"])('dev'));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
})); // users handler

app.use('/api/v1/users', _user["default"]); // accounts handler

app.use('/api/v1/accounts', _account["default"]); // transactions handler

app.use('/api/v1/transactions', _transaction["default"]);
app.get('*', function (req, res) {
  return res.status(200).send({
    message: 'Welcome to Banka'
  });
});
server.listen(port, function () {
  console.log("Server running at ".concat(port));
});
var _default = app;
exports["default"] = _default;
//# sourceMappingURL=index.js.map