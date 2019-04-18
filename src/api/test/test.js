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
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
  // Test to sign up user
  it('should sign in user', (done) => {
    const user = {
      email: 'ola1.wale@gmail.com',
      password: 'golden',
    };
    chai.request(app)
      .post('/api/v1/users/auth/signin')
      .send(user)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Transactions', () => {
  let token;

  before((done) => {
    chai.request(app)
      .post('/api/v1/users/auth/signin')
      .send({ email: 'ola1.wale@gmail.com', password: 'golden' })
      .end((err, res) => {
        ({ token } = res.body.data);
        done();
      });
  });
  // Test to credit a user account
  it('should credit a user account', (done) => {
    const transaction = {
      createdOn: 'Mon Feb 18 2019 09:15:03',
      accountNumber: '0019898982',
      cashier: 2,
      amount: 10000.00,
    };
    chai.request(app)
      .post('/api/v1/transactions/0019898982/credit')
      .set('Authorization', `Bearer ${token}`)
      .send(transaction)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to debit a user account
  it('should debit a user account', (done) => {
    const transaction = {
      createdOn: 'Mon Feb 18 2019 09:15:03',
      accountNumber: '0019898982',
      cashier: 2,
      amount: 10000.00,
    };
    chai.request(app)
      .post('/api/v1/transactions/0019898982/debit')
      .set('Authorization', `Bearer ${token}`)
      .send(transaction)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to fetch all transactions
  it('should get all transaction', (done) => {
    chai.request(app)
      .get('/api/v1/transactions')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});

describe('Accounts', () => {
  let token;

  before((done) => {
    chai.request(app)
      .post('/api/v1/users/auth/signin')
      .send({ email: 'ola1.wale@gmail.com', password: 'golden' })
      .end((err, res) => {
        ({ token } = res.body.data);
        done();
      });
  });
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
      .set('Authorization', `Bearer ${token}`)
      .send(account)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to update account
  it('should update account', (done) => {
    const accountNumber = '0019898982';
    const account = {
      accountNumber: '0019898982',
      createdOn: 'Mon Feb 18 2019 09:15:03',
      owner: 1,
      type: 'savings',
      status: 'active',
      balance: 46888.09,
    };
    chai.request(app)
      .put(`/api/v1/accounts/${accountNumber}`)
      .set('Authorization', `Bearer ${token}`)
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
    const accountNumber = '0019898982';
    chai.request(app)
      .delete(`/api/v1/accounts/${accountNumber}`)
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        // res.body.should.have.property('message');
        done();
      });
  });

  // Test to fetch all accounts
  it('should get all accounts', (done) => {
    chai.request(app)
      .get('/api/v1/accounts')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to fetch an account
  it('should get an account', (done) => {
    chai.request(app)
      .get('/api/v1/accounts/0019898982')
      .set('Authorization', `Bearer ${token}`)
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        done();
      });
  });
});
