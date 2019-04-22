/* eslint-disable no-console */
const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: '127.0.0.1',
  database: 'banka',
  password: 'admins',
  port: 5432,
});

pool.on('connect', () => {
  console.log('connected to the db');
});

/**
 * Create User Table
 */
const createUserTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    Users(
      id UUID PRIMARY KEY,
      email VARCHAR(120) UNIQUE NOT NULL,
      firstName VARCHAR(120) NOT NULL,
      lastName VARCHAR(120) NOT NULL,
      password VARCHAR(120) NOT NULL,
      type VARCHAR(120) NOT NULL,
      isAdmin integer NOT NULL,
      createdOn TIMESTAMP NOT NULL,
      last_login TIMESTAMP
    )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create Accounts Table
 */
const createAccountTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    Accounts(
      id UUID PRIMARY KEY,
      accountNumber VARCHAR(120) UNIQUE NOT NULL,
      owner UUID NOT NULL,
      type VARCHAR(50) NOT NULL,
      status VARCHAR(50) NOT NULL,
      balance float NOT NULL,
      createdOn TIMESTAMP NOT NULL,
      updatedOn TIMESTAMP,
      FOREIGN KEY (owner) REFERENCES Users (id) ON DELETE CASCADE
    )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create Accounts Table
 */
const createTransactionTable = () => {
  const queryText = `CREATE TABLE IF NOT EXISTS
    Transactions(
      id UUID PRIMARY KEY,
      accountNumber VARCHAR(120) NOT NULL,
      cashier UUID NOT NULL,
      type VARCHAR(50) NOT NULL,
      amount float NOT NULL,
      oldBalance float NOT NULL,
      newBalance float NOT NULL,
      createdOn TIMESTAMP NOT NULL,
      updatedOn TIMESTAMP,
      FOREIGN KEY (cashier) REFERENCES Users (id) ON DELETE CASCADE,
      FOREIGN KEY (accountNumber) REFERENCES Accounts (accountNumber) ON DELETE CASCADE
    )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Drop UserTable
 */
const dropUserTable = () => {
  const queryText = 'DROP TABLE IF EXISTS Users returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Drop AccountTable
 */
const dropAccountTable = () => {
  const queryText = 'DROP TABLE IF EXISTS Accounts returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Drop AccountTable
 */
const dropTransactionTable = () => {
  const queryText = 'DROP TABLE IF EXISTS Transactions returning *';
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
};

/**
 * Create All Tables
 */
const createAllTables = () => {
  createUserTable();
  createAccountTable();
  createTransactionTable();
};
/**
 * Drop All Tables
 */
const dropAllTables = () => {
  dropUserTable();
  dropAccountTable();
  dropTransactionTable();
};

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createUserTable,
  createAccountTable,
  createTransactionTable,
  createAllTables,
  dropUserTable,
  dropAllTables,
};

require('make-runnable');
