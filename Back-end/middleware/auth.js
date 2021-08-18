const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {

  /* var authHeader = req.headers.authorization;
  var auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':'); */

  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.DB_TOKEN);
    const userId = decodedToken.id;
    console.log(userId); 
    console.log(token);
    console.log(decodedToken);
    if (req.body.userId && req.body.userId !== userId) {
      res.send('User Info');
      throw 'User ID non-valide';
    } else {
      console.log(req.body.userId);
      next();
    }
  } catch(error) {
    res.status(401).json({error: error | 'Invalid request!'});
  }
};