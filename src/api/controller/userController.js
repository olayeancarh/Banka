/* eslint-disable no-console */
/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import validator from 'email-validator';
import UserService from '../services/user.service';
import config from '../utilz/config';
import helpers from '../utilz/helpers';

class UserController {
  static addAUser(req, res) {
    const newUser = req.body;
    if (!helpers.userSignup(newUser)) return res.status(401).json({ status: 401, data: 'Some fields are missing' });
    if (!validator.validate(newUser.email)) return res.status(401).json({ status: 401, data: 'Invalid email' });
    bcrypt.hash(newUser.password, config.saltRounds, (err, hash) => {
      newUser.password = hash;
      const createdUser = UserService.addNewUser(newUser);
      createdUser.then((user) => {
        if (user.routine === '_bt_check_unique') {
          return res.status(401).json({ status: 401, data: 'Email already exists' });
        }
        jwt.sign({ email: newUser.email }, config.secret, (_err, token) => {
          // eslint-disable-next-line no-param-reassign
          user.rows[0].token = token;
          return res.status(201).json({ status: 201, data: user.rows[0] });
        });
      });
    });
  }

  static userLogin(req, res) {
    // let myToken;
    const {
      email, password,
    } = req.body;
    if (!helpers.userSignin(email, password)) return res.status(401).json({ status: 401, data: 'Some fields are missing' });
    if (!validator.validate(email)) return res.status(401).json({ status: 401, data: 'Invalid email' });
    UserService.userLogIn(email)
      .then((user) => {
        if (!user.rows[0]) {
          return res.status(404).json({
            status: 404,
            data: 'Authenticaation failed',
          });
        }
        bcrypt.compare(password, user.rows[0].password).then((resp) => {
          if (!resp) {
            return res.status(404).json({
              status: 404,
              data: 'Login failed',
            });
          }
          jwt.sign({ email }, config.secret, (err, token) => {
            // eslint-disable-next-line no-param-reassign
            user.rows[0].token = token;
            return res.status(201).json({
              status: 201,
              data: user.rows[0],
            });
          });
        });
      });
  }
}

export default UserController;
