/* eslint-disable no-console */
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

// Routes
import userRoutes from './api/routes/user.route';
import accountRoutes from './api/routes/account.route';
import transactionRoutes from './api/routes/transaction.route';

const app = express();

// const hostname = '127.0.0.1';

const port = process.env.PORT || 5000;

const server = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// users handler
app.use('/api/v1/users', userRoutes);

// accounts handler
app.use('/api/v1/accounts', accountRoutes);

// transactions handler
app.use('/api/v1/transactions', transactionRoutes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Banka',
}));

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});

module.exports = app;
