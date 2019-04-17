"use strict";

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable import/no-extraneous-dependencies */
// Import the dependencies for testing
// Configure chai
_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

describe('Users', function () {
  // Test to sign up user
  it('should sign up user', function (done) {
    var user = {
      email: 'ahmed.musa@yahoo.com',
      firstName: 'Ahmed',
      lastName: 'Musa',
      password: 'golden',
      type: 'client',
      isAdmin: 'false'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signup').send(user).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  }); // Test to sign up user

  it('should sign in user', function (done) {
    var user = {
      email: 'ola1.wale@gmail.com',
      password: 'golden'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signin').send(user).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  });
});
describe('Transactions', function () {
  // Test to credit a user account
  it('should credit a user account', function (done) {
    var transaction = {
      createdOn: 'Mon Feb 18 2019 09:15:03',
      type: 'credit',
      accountNumber: '0019898982',
      cashier: 2,
      amount: 10000.00
    };

    _chai["default"].request(_index["default"]).post('/api/v1/transactions/0019898982/credit').send(transaction).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  }); // Test to debit a user account

  it('should debit a user account', function (done) {
    var transaction = {
      createdOn: 'Mon Feb 18 2019 09:15:03',
      type: 'debit',
      accountNumber: '0019898982',
      cashier: 2,
      amount: 10000.00
    };

    _chai["default"].request(_index["default"]).post('/api/v1/transactions/0019898982/debit').send(transaction).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  });
});
describe('Accounts', function () {
  // Test to create an account
  it('should create an account', function (done) {
    var account = {
      accountNumber: '0019898982',
      createdOn: 'Mon Feb 18 2019 09:15:03',
      owner: 1,
      type: 'savings',
      status: 'active',
      balance: 46888.09
    };

    _chai["default"].request(_index["default"]).post('/api/v1/accounts').send(account).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object');
      done();
    });
  }); // Test to update account

  it('should update account', function (done) {
    var accountNumber = '0019898982';
    var account = {
      accountNumber: '0019898982',
      createdOn: 'Mon Feb 18 2019 09:15:03',
      owner: 1,
      type: 'savings',
      status: 'active',
      balance: 46888.09
    };

    _chai["default"].request(_index["default"]).put("/api/v1/accounts/".concat(accountNumber)).send(account).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object'); // res.body.should.have.property('message');

      done();
    });
  }); // Test to delete account

  it('should delete account', function (done) {
    var id = 2;

    _chai["default"].request(_index["default"])["delete"]("/api/v1/accounts/".concat(id)).end(function (err, res) {
      res.should.have.status(200);
      res.body.should.be.a('object'); // res.body.should.have.property('message');

      done();
    });
  });
});
//# sourceMappingURL=test.js.map