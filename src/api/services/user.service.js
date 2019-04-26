/* eslint-disable no-console */
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import pool from '../db/db';

const UserService = {
  async addNewUser(user) {
    const client = await pool.connect();
    const createQuery = `INSERT INTO
      users(id, email, firstname, lastname, password, type, isadmin, createdon, last_login)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)
      returning *`;
    const values = [
      uuidv4(),
      user.email,
      user.firstName,
      user.lastName,
      user.password,
      user.type,
      user.isAdmin,
      moment(new Date()),
      moment(new Date()),
    ];
    try {
      const createdUser = await client.query(createQuery, values);
      return createdUser;
    } catch (err) {
      return err;
    } finally {
      client.end();
    }
  },
  async userLogIn(email) {
    const client = await pool.connect();
    const createQuery = 'SELECT * FROM users WHERE email = $1';
    try {
      const loggeUser = await client.query(createQuery, [email]);
      return loggeUser;
    } catch (err) {
      return err;
    } finally {
      client.end();
    }
  },
  async getAUser(userId) {
    const client = await pool.connect();
    const createQuery = 'SELECT * FROM users WHERE id = $1';
    try {
      const getUser = await client.query(createQuery, [userId]);
      return getUser;
    } catch (err) {
      return err;
    } finally {
      client.end();
    }
  },
};

export default UserService;
