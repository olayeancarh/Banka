/* eslint-disable consistent-return */
import jwt from 'jsonwebtoken';
import config from './config';

function checkToken(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers.authorization;
  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ');
    // Get token from array
    const bearerToken = bearer[1];
    jwt.verify(bearerToken, config.secret, (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: `Token is not valid ${err}`,
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.json({
      success: false,
      message: 'Auth token is not supplied',
    });
  }
}

export default {
  checkToken,
};
