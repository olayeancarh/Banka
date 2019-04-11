/* eslint-disable import/no-extraneous-dependencies */
// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';

import app from '../../index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Users', () => {
  // Test to sign up user
  it('should sign up user', (done) => {
    const user = {
      email: 'ahmed.musa@yahoo.com',
      firstName: 'Ahmed',
      lastName: 'Musa',
      password: 'golden',
      type: 'client',
      isAdmin: 'false',
    };
    chai.request(app)
      .post('/api/v1/users')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Transactions', () => {
  // Test to create a transaction
  it('should create a transaction', (done) => {
    const transaction = {
      createdOn: 'Mon Feb 18 2019 09:15:03',
      type: 'debit',
      accountNumber: '0019898982',
      cashier: 2,
      amount: 10000.00,
      oldBalance: 46888.09,
      newBalance: 36888.09,
    };
    chai.request(app)
      .post('/api/v1/transactions')
      .send(transaction)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Accounts', () => {
  // Test to create an account
  it('should create an account', (done) => {
    const account = {
      accountNumber: '0019898982',
      createdOn: 'Mon Feb 18 2019 09:15:03',
      owner: 1,
      type: 'savings',
      status: 'active',
      balance: 46888.09,
    };
    chai.request(app)
      .post('/api/v1/accounts')
      .send(account)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to update account
  it('should update account', (done) => {
    const id = 1;
    const account = {
      accountNumber: '0019898982',
      createdOn: 'Mon Feb 18 2019 09:15:03',
      owner: 1,
      type: 'savings',
      status: 'active',
      balance: 46888.09,
    };
    chai.request(app)
      .put(`/api/v1/accounts/${id}`)
      .send(account)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        // res.body.should.have.property('message');
        done();
      });
  });

  // Test to delete account
  it('should delete account', (done) => {
    const id = 2;
    chai.request(app)
      .delete(`/api/v1/accounts/delete/${id}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        // res.body.should.have.property('message');
        done();
      });
  });
});
