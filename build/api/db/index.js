"use strict";

/* eslint-disable no-console */
var _require = require('pg'),
    Pool = _require.Pool;

var pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'banka',
  password: 'admins',
  port: 5432
});
pool.on('connect', function () {
  console.log('connected to the db');
});
/**
 * Create User Table
 */

var createUserTable = function createUserTable() {
  var queryText = "CREATE TABLE IF NOT EXISTS\n    Users(\n      id UUID PRIMARY KEY,\n      email VARCHAR(120) UNIQUE NOT NULL,\n      firstName VARCHAR(120) NOT NULL,\n      lastName VARCHAR(120) NOT NULL,\n      password VARCHAR(120) NOT NULL,\n      type VARCHAR(120) NOT NULL,\n      isAdmin boolean NOT NULL,\n      createdOn TIMESTAMP NOT NULL,\n      last_login TIMESTAMP\n    )";
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err);
    pool.end();
  });
};
/**
 * Create Accounts Table
 */


var createAccountTable = function createAccountTable() {
  var queryText = "CREATE TABLE IF NOT EXISTS\n    Accounts(\n      id UUID PRIMARY KEY,\n      accountNumber VARCHAR(120) UNIQUE NOT NULL,\n      owner UUID NOT NULL,\n      type VARCHAR(50) NOT NULL,\n      status VARCHAR(50) NOT NULL,\n      balance float NOT NULL,\n      createdOn TIMESTAMP NOT NULL,\n      updatedOn TIMESTAMP,\n      FOREIGN KEY (owner) REFERENCES Users (id) ON DELETE CASCADE\n    )";
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err);
    pool.end();
  });
};
/**
 * Create Accounts Table
 */


var createTransactionTable = function createTransactionTable() {
  var queryText = "CREATE TABLE IF NOT EXISTS\n    Transactions(\n      id UUID PRIMARY KEY,\n      accountNumber VARCHAR(120) NOT NULL,\n      cashier UUID NOT NULL,\n      type VARCHAR(50) NOT NULL,\n      amount float NOT NULL,\n      oldBalance float NOT NULL,\n      newBalance float NOT NULL,\n      createdOn TIMESTAMP NOT NULL,\n      updatedOn TIMESTAMP,\n      FOREIGN KEY (cashier) REFERENCES Users (id) ON DELETE CASCADE,\n      FOREIGN KEY (accountNumber) REFERENCES Accounts (accountNumber) ON DELETE CASCADE\n    )";
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err);
    pool.end();
  });
};
/**
 * Drop UserTable
 */


var dropUserTable = function dropUserTable() {
  var queryText = 'DROP TABLE IF EXISTS users returning *';
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err);
    pool.end();
  });
};
/**
 * Drop AccountTable
 */


var dropAccountTable = function dropAccountTable() {
  var queryText = 'DROP TABLE IF EXISTS Accounts returning *';
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err);
    pool.end();
  });
};
/**
 * Drop AccountTable
 */


var dropTransactionTable = function dropTransactionTable() {
  var queryText = 'DROP TABLE IF EXISTS Transactions returning *';
  pool.query(queryText).then(function (res) {
    console.log(res);
    pool.end();
  })["catch"](function (err) {
    console.log(err);
    pool.end();
  });
};
/**
 * Create All Tables
 */


var createAllTables = function createAllTables() {
  createUserTable();
  createAccountTable();
  createTransactionTable();
};
/**
 * Drop All Tables
 */


var dropAllTables = function dropAllTables() {
  dropUserTable();
  dropAccountTable();
  dropTransactionTable();
};

pool.on('remove', function () {
  console.log('client removed');
  process.exit(0);
});
module.exports = {
  createUserTable: createUserTable,
  createAccountTable: createAccountTable,
  createTransactionTable: createTransactionTable,
  createAllTables: createAllTables,
  dropUserTable: dropUserTable,
  dropAllTables: dropAllTables
};

require('make-runnable');
//# sourceMappingURL=index.js.map