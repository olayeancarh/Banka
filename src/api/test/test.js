/* eslint-disable import/no-extraneous-dependencies */
// Import the dependencies for testing
import chai from 'chai';
import chaiHttp from 'chai-http';
import randMail from 'random-email';

import app from '../../index';

// Configure chai
chai.use(chaiHttp);
chai.should();

describe('Users', () => {
  // Test to sign up user
  it('should sign up user', (done) => {
    const user = {
      email: randMail({ domain: 'banka.com' }),
      firstName: 'Ahmed',
      lastName: 'Musa',
      password: 'golden',
      type: 'client',
      isAdmin: false,
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
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
  });

  // Test to check if a user exist - sign up
  it('should check if user exists', (done) => {
    const user = {
      email: 'yinaj009@yahoo.com',
      firstName: 'Lawal',
      lastName: 'Bello',
      password: 'golden',
      type: 'client',
      isAdmin: 'false',
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        done();
      });
  });

  // Test to check if user fields are passed - sign up
  it('should check if user fields are passed', (done) => {
    const user = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      type: 'client',
      isAdmin: false,
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        done();
      });
  });

  // Test to check if correct email format is used - sign up
  it('should check if correct email format is used', (done) => {
    const user = {
      email: 'lawaluuuu',
      firstName: 'Lawal',
      lastName: 'Bello',
      password: 'golden',
      type: 'client',
      isAdmin: 'false',
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signup')
      .send(user)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        res.body.should.have.property('status');
        res.body.should.have.property('data');
        done();
      });
  });

  // Test to sign in user
  it('should sign in user', (done) => {
    const user = {
      email: 'yinaj009@yahoo.com',
      password: 'golden',
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signin')
      .send(user)
      .end((err, res) => {
        res.should.have.status(201);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to test for none existing emails during sign in
  it('should test for none existing emails during sign in', (done) => {
    const user = {
      email: 'oloooo.wale@gmail.com',
      password: 'golden',
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signin')
      .send(user)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to test for wrong passwords
  it('should test for wrong passwords', (done) => {
    const user = {
      email: 'yinaj009@yahoo.com',
      password: 'goldenBoy1x',
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signin')
      .send(user)
      .end((err, res) => {
        res.should.have.status(404);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to test for wrong email format - sign in
  it('should test for wrong email format', (done) => {
    const user = {
      email: 'ahmed.muhoo.com',
      password: 'golden',
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signin')
      .send(user)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();
      });
  });

  // Test to test for \empty fields - sign in
  it('should test for  empty fields', (done) => {
    const user = {
      email: '',
      password: '',
    };
    chai
      .request(app)
      .post('/api/v1/users/auth/signin')
      .send(user)
      .end((err, res) => {
        res.should.have.status(401);
        res.body.should.be.a('object');
        done();
      });
  });
});
