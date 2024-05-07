const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const authMiddleware = (req, res, next) => {

  const authorizationHeaderToken = req.headers.Authorization;
  if (!authorizationHeaderToken || !authorizationHeaderToken.startsWith('Bearer ')) {
    return res.status(403).json({});
  }

  const token = authorizationHeaderToken.split(' ')[1];

  const decodedToken = jwt.verify(token, JWT_SECRET)

  if (!decodedToken) {
    res.status(403).json({
      message: 'incorrect/ missing token',
    })
  }
  console.log(decodedToken);
  req.userId = decodedToken.userId;

  next();


}


module.exports = authMiddleware;




