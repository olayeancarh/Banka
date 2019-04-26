/* eslint-disable no-console */
import uuidv4 from 'uuid/v4';
import moment from 'moment';
import pool from '../db/db';

const AccountService = {
  async addNewAccount(account) {
    const client = await pool.connect();
    const createAccountQuery = `INSERT INTO
      accounts(id, accountNumber, owner, type, status, balance, createdon, updatedon)
      VALUES($1, $2, $3, $4, $5, $6, $7, $8)
      returning *`;
    const values = [
      uuidv4(),
      account.accountNumber,
      account.owner,
      account.type,
      account.status,
      account.balance,
      moment(new Date()),
      moment(new Date()),
    ];
    try {
      const createdAccount = await client.query(createAccountQuery, values);
      return createdAccount;
    } catch (err) {
      return err;
    } finally {
      client.end();
    }
  },
};

export default AccountService;
