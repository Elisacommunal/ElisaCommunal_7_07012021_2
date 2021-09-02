const jwt = require('jsonwebtoken');
require('dotenv').config();


module.exports = (req, res, next) =>  { 

    const token = req.headers.authorization.split(' ')[1];
    console.log(token);

    if(!token){
        return res.status(403).send({
            message: "Aucun token fourni !"
        }); 
    }
    jwt.verify(token, process.env.DB_TOKEN, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Non autorisé !"
            });
        }
    
    req.id_user = decoded.userId;
    console.log("voici le id_user du token:",req.id_user);
    next();
  });
}; 