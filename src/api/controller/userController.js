/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import UserService from '../services/user.service';
import dummyData from '../utilz/dummyData';
import config from '../utilz/config';

class UserController {
  static addAUser(req, res) {
    const newUser = req.body;
    const emailExists = dummyData.users.find(users => users.email === newUser.email);
    const saltRounds = 10;
    if (emailExists) {
      return res.json({
        status: 401,
        data: 'This email is associated with a Banka account',
      });
    }
    if ([newUser.email, newUser.firstName, newUser.lastName, newUser.password].includes('')) {
      return res.json({
        status: 401,
        data: 'All fields are required',
      });
    }
    bcrypt.hash(newUser.password, saltRounds, (err, hash) => {
      newUser.password = hash;
      const createdUser = UserService.addNewUser(newUser);
      // createdUser.password = '';
      return res.json({
        status: 201,
        data: createdUser,
      });
    });
  }

  static userLogin(req, res) {
    // let myToken;
    const {
      email, password,
    } = req.body;
    const emailExists = dummyData.users.find(user => user.email === email);
    if (!emailExists) {
      return res.json({
        status: 404,
        data: 'Authentication failed',
      });
    }
    bcrypt.compare(password, emailExists.password).then((resp) => {
      if (!resp) {
        return res.json({
          status: 404,
          data: 'Login failed',
        });
      }
      jwt.sign({ email }, config.secret, (err, token) => {
        emailExists.token = token;
        emailExists.password = '';
        return res.json({
          status: 201,
          data: emailExists,
        });
      });
    });
  }
}

export default UserController;
