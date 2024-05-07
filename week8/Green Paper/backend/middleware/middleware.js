const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const authMiddleware = (req, res, next) => {

  const authorizationHeaderToken = req.headers.authorization;
  if (!authorizationHeaderToken || !authorizationHeaderToken.startsWith('Bearer ')) {
    return res.status(403).json({
      message: 'incorrect/ missing token',
    });
  }

  const token = authorizationHeaderToken.split(' ')[1];
  const decodedToken = jwt.verify(token, JWT_SECRET)
  if (!decodedToken) {
    return res.status(403).json({
      message: 'incorrect token',
    })
  }

  if (decodedToken.userId) {
    req.userId = decodedToken.userId;
    next();
  } else {
    return res.status(403).json({
      message: 'incorrect/missing token',
    })
  }

}


module.exports = authMiddleware;




