"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

var _v = _interopRequireDefault(require("uuid/v4"));

var _moment = _interopRequireDefault(require("moment"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var connectionString = 'postgresql://postgres:admins@127.0.0.1:5432/banka';
var pool = new _pg.Pool({
  connectionString: connectionString
});
var UserService = {
  addNewUser: function () {
    var _addNewUser = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(user) {
      var client, createQuery, values, createdUser;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return pool.connect();

            case 2:
              client = _context.sent;
              createQuery = "INSERT INTO\n      users(id, email, firstname, lastname, password, type, isadmin, createdon, last_login)\n      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)\n      returning *";
              values = [(0, _v["default"])(), user.email, user.firstName, user.lastName, user.password, user.type, user.isAdmin, (0, _moment["default"])(new Date()), (0, _moment["default"])(new Date())];
              _context.prev = 5;
              _context.next = 8;
              return client.query(createQuery, values);

            case 8:
              createdUser = _context.sent;
              return _context.abrupt("return", createdUser);

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](5);
              return _context.abrupt("return", _context.t0);

            case 15:
              _context.prev = 15;
              client.end();
              return _context.finish(15);

            case 18:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 12, 15, 18]]);
    }));

    function addNewUser(_x) {
      return _addNewUser.apply(this, arguments);
    }

    return addNewUser;
  }(),
  userLogIn: function () {
    var _userLogIn = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(email) {
      var client, createQuery, loggeUser;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return pool.connect();

            case 2:
              client = _context2.sent;
              createQuery = 'SELECT * FROM users WHERE email = $1';
              _context2.prev = 4;
              _context2.next = 7;
              return client.query(createQuery, [email]);

            case 7:
              loggeUser = _context2.sent;
              return _context2.abrupt("return", loggeUser);

            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](4);
              return _context2.abrupt("return", _context2.t0);

            case 14:
              _context2.prev = 14;
              client.end();
              return _context2.finish(14);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[4, 11, 14, 17]]);
    }));

    function userLogIn(_x2) {
      return _userLogIn.apply(this, arguments);
    }

    return userLogIn;
  }()
};
var _default = UserService;
exports["default"] = _default;
//# sourceMappingURL=user.service.js.map