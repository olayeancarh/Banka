/* eslint-disable no-console */
import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';

// Routes
import routes from './api/routes/index';

const app = express();

const port = process.env.PORT || 5000;

const server = http.createServer(app);

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// users handler
app.use('/api/v1', routes);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to Banka',
}));

server.listen(port, () => {
  console.log(`Server running at ${port}`);
});

export default app;
