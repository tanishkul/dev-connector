const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function (req, res, next) {
  try {
    // Get token from headers
    const token = req.header('x-auth-token');

    if (!token) {
      return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Decode the token
    const decoded = jwt.verify(token, config.get('jwtSecret'));
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error(err.message);
    return res.status(401).json({ msg: 'Token is invalid' });
  }
};
