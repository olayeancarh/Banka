/* eslint-disable no-console */
import { Pool } from 'pg';

const env = process.env.NODE_ENV || 'development';

const userEnv = {
  development: {
    connectionString: 'postgresql://postgres:admins@127.0.0.1:5432/banka',
    ssl: false,
  },
  production: {
    connectionString: 'postgres://wrzrvclkxnmkrs:e2fdde48ebab7fcfeed46a60bc907c6b254bdd6d4da7b43ff25770572837389c@ec2-54-243-197-120.compute-1.amazonaws.com:5432/d1tn3c0l0she6u',
    ssl: true,
  },
  test: {
    connectionString: 'postgres://gucbgfcy:cjy3nuYOfPBoEhS2omIS-QTrlc3ngBqx@isilo.db.elephantsql.com:5432/gucbgfcy',
    ssl: false,
  },
};

const pool = new Pool({
  connectionString: userEnv[env].connectionString,
  ssl: userEnv[env].ssl,
});

export default pool;
