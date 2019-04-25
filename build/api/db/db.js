"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _pg = require("pg");

/* eslint-disable no-console */
var env = process.env.NODE_ENV || 'development';
var userEnv = {
  development: {
    connectionString: 'postgresql://postgres:admins@127.0.0.1:5432/banka',
    ssl: false
  },
  production: {
    connectionString: 'postgres://wrzrvclkxnmkrs:e2fdde48ebab7fcfeed46a60bc907c6b254bdd6d4da7b43ff25770572837389c@ec2-54-243-197-120.compute-1.amazonaws.com:5432/d1tn3c0l0she6u',
    ssl: true
  },
  test: {
    connectionString: 'postgres://gucbgfcy:cjy3nuYOfPBoEhS2omIS-QTrlc3ngBqx@isilo.db.elephantsql.com:5432/gucbgfcy',
    ssl: false
  }
};
var pool = new _pg.Pool({
  connectionString: userEnv[env].connectionString,
  ssl: userEnv[env].ssl
});
var _default = pool;
exports["default"] = _default;
//# sourceMappingURL=db.js.map