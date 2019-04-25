"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _chai = _interopRequireDefault(require("chai"));

var _chaiHttp = _interopRequireDefault(require("chai-http"));

var _index = _interopRequireDefault(require("../../index"));

/* eslint-disable import/no-extraneous-dependencies */
// Import the dependencies for testing
// Configure chai
_chai["default"].use(_chaiHttp["default"]);

_chai["default"].should();

describe('Users', function () {
  // Test to sign up user
  it('should sign up user', function (done) {
    var user = {
      email: 'ahmed006.musa@yahoo.com',
      firstName: 'Ahmed',
      lastName: 'Musa',
      password: 'golden',
      type: 'client',
      isAdmin: false
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signup').send(user).end(function (err, res) {
      res.should.have.status(201);
      res.body.should.be.a('object');
      res.body.should.have.property('data');
      res.body.data.should.have.property('id');
      res.body.data.should.have.property('email');
      res.body.data.should.have.property('password');
      res.body.data.should.have.property('firstname');
      res.body.data.should.have.property('lastname');
      res.body.data.should.have.property('type');
      res.body.data.should.have.property('isadmin');
      done();
    });
  }); // Test to check if a user exist - sign up

  it('should check if user exists', function (done) {
    var user = {
      email: 'ahmed2.musa@yahoo.com',
      firstName: 'Lawal',
      lastName: 'Bello',
      password: 'golden',
      type: 'client',
      isAdmin: 'false'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signup').send(user).end(function (err, res) {
      res.should.have.status(401);
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('data');
      done();
    });
  }); // Test to check if user fields are passed - sign up

  it('should check if user fields are passed', function (done) {
    var user = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      type: 'client',
      isAdmin: false
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signup').send(user).end(function (err, res) {
      res.should.have.status(401);
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('data');
      done();
    });
  }); // Test to check if correct email format is used - sign up

  it('should check if correct email format is used', function (done) {
    var user = {
      email: 'lawaluuuu',
      firstName: 'Lawal',
      lastName: 'Bello',
      password: 'golden',
      type: 'client',
      isAdmin: 'false'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signup').send(user).end(function (err, res) {
      res.should.have.status(401);
      res.body.should.be.a('object');
      res.body.should.have.property('status');
      res.body.should.have.property('data');
      done();
    });
  }); // Test to sign in user

  it('should sign in user', function (done) {
    var user = {
      email: 'ahmed.musa@yahoo.com',
      password: 'golden'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signin').send(user).end(function (err, res) {
      res.should.have.status(201);
      res.body.should.be.a('object');
      done();
    });
  }); // Test to test for none existing emails during sign in

  it('should test for none existing emails during sign in', function (done) {
    var user = {
      email: 'oloooo.wale@gmail.com',
      password: 'golden'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signin').send(user).end(function (err, res) {
      res.should.have.status(404);
      res.body.should.be.a('object');
      done();
    });
  }); // Test to test for wrong passwords

  it('should test for wrong passwords', function (done) {
    var user = {
      email: 'ahmed.musa@yahoo.com',
      password: 'goldenBoy1x'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signin').send(user).end(function (err, res) {
      res.should.have.status(404);
      res.body.should.be.a('object');
      done();
    });
  }); // Test to test for wrong email format or empty fields - sign in

  it('should test for wrong email format or empty fields', function (done) {
    var user = {
      email: 'ahmed.muhoo.com',
      password: 'goldenBoy1x'
    };

    _chai["default"].request(_index["default"]).post('/api/v1/users/auth/signin').send(user).end(function (err, res) {
      res.should.have.status(401);
      res.body.should.be.a('object');
      done();
    });
  });
}); // describe('Transactions', () => {
//   let token;
//   before((done) => {
//     chai
//       .request(app)
//       .post('/api/v1/users/auth/signin')
//       .send({ email: 'ola1.wale@gmail.com', password: 'golden' })
//       .end((err, res) => {
//         ({ token } = res.body.data);
//         done();
//       });
//   });
//   // Test to credit a user account
//   it('should credit a user account', (done) => {
//     const transaction = {
//       createdOn: 'Mon Feb 18 2019 09:15:03',
//       accountNumber: '0019898982',
//       cashier: 2,
//       amount: 10000.0,
//     };
//     chai
//       .request(app)
//       .post('/api/v1/transactions/0019898982/credit')
//       .set('Authorization', `Bearer ${token}`)
//       .send(transaction)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
//   // Test to debit a user account
//   it('should debit a user account', (done) => {
//     const transaction = {
//       createdOn: 'Mon Feb 18 2019 09:15:03',
//       accountNumber: '0019898982',
//       cashier: 2,
//       amount: 10000.0,
//     };
//     chai
//       .request(app)
//       .post('/api/v1/transactions/0019898982/debit')
//       .set('Authorization', `Bearer ${token}`)
//       .send(transaction)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
//   // Test to fetch all transactions
//   it('should get all transaction', (done) => {
//     chai
//       .request(app)
//       .get('/api/v1/transactions')
//       .set('Authorization', `Bearer ${token}`)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
// });
// describe('Accounts', () => {
//   let token;
//   before((done) => {
//     chai
//       .request(app)
//       .post('/api/v1/users/auth/signin')
//       .send({ email: 'ola1.wale@gmail.com', password: 'golden' })
//       .end((err, res) => {
//         ({ token } = res.body.data);
//         done();
//       });
//   });
//   // Test to create an account
//   it('should create an account', (done) => {
//     const account = {
//       accountNumber: '0019898982',
//       createdOn: 'Mon Feb 18 2019 09:15:03',
//       owner: 1,
//       type: 'savings',
//       status: 'active',
//       balance: 46888.09,
//     };
//     chai
//       .request(app)
//       .post('/api/v1/accounts')
//       .set('Authorization', `Bearer ${token}`)
//       .send(account)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
//   // Test to update account
//   it('should update account', (done) => {
//     const accountNumber = '0019898982';
//     const account = {
//       accountNumber: '0019898982',
//       createdOn: 'Mon Feb 18 2019 09:15:03',
//       owner: 1,
//       type: 'savings',
//       status: 'active',
//       balance: 46888.09,
//     };
//     chai
//       .request(app)
//       .put(`/api/v1/accounts/${accountNumber}`)
//       .set('Authorization', `Bearer ${token}`)
//       .send(account)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         // res.body.should.have.property('message');
//         done();
//       });
//   });
//   // Test to delete account
//   it('should delete account', (done) => {
//     const accountNumber = '0019898982';
//     chai
//       .request(app)
//       .delete(`/api/v1/accounts/${accountNumber}`)
//       .set('Authorization', `Bearer ${token}`)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         // res.body.should.have.property('message');
//         done();
//       });
//   });
//   // Test to fetch all accounts
//   it('should get all accounts', (done) => {
//     chai
//       .request(app)
//       .get('/api/v1/accounts')
//       .set('Authorization', `Bearer ${token}`)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
//   // Test to fetch an account
//   it('should get an account', (done) => {
//     chai
//       .request(app)
//       .get('/api/v1/accounts/0019898982')
//       .set('Authorization', `Bearer ${token}`)
//       .end((err, res) => {
//         res.should.have.status(200);
//         res.body.should.be.a('object');
//         done();
//       });
//   });
// });
//# sourceMappingURL=test.js.map