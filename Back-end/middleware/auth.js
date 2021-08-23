const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, process.env.DB_TOKEN);
    const userId = decodedToken.id;
    /* if (req.body.userId && req.body.userId !== userId) {
      res.send('User Info');
      throw 'User ID non-valide';
    } else {
      console.log("Dans auth :", req.body.userId);
      
    } */
    next();
  } catch(error) {
    res.status(401).json({error: error | 'Invalid request!'});
  }
};