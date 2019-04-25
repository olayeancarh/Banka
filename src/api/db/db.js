/* eslint-disable no-console */
import { Pool } from 'pg';

const env = process.env.NODE_ENV || 'development';

const userEnv = {
  development: {
    connectionString: 'postgresql://postgres:admins@127.0.0.1:5432/banka',
    ssl: false,
  },
  production: {
    connectionString: 'postgresql://postgres:admins@127.0.0.1:5432/banka',
    ssl: true,
  },
  test: {
    connectionString: 'postgresql://postgres:admins@127.0.0.1:5432/banka',
    ssl: false,
  },
};

const pool = new Pool({
  connectionString: userEnv[process.env.NODE_ENV].connectionString,
  ssl: userEnv[env].ssl,
});

export default pool;
