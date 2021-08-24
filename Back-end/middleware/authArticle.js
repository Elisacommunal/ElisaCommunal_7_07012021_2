const jwt = require('jsonwebtoken');
const sql = require("../models/db.js");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
    try{
        console.log("Coucou on est dans authComment");
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.DB_TOKEN);
        const userId = decodedToken.id;
        console.log("userToken",userId);
        const isAdmin = decodedToken.isAdmin;
        console.log("Admin",isAdmin);
        console.log("idArticle de req.params", req.params.articleId);

    sql.query(`SELECT * FROM article WHERE id = ${req.params.articleId}` , (err, data) => {
        console.log(data);
        console.log(data[0].id_User);
        if ((data[0].id_User === userId) || isAdmin === 1) {
            console.log("action autorisé");
            next();
        } else {
            res.status(403).json({ message: "Action non autorisé" });

            console.log(`Hey ! Tu arrêtes ça, tu n'as pas le droit ! Vilain !`);
        }
    });
    }
    catch{
        res.status(401).json({error: error | 'Requête non authentifiée !'});
    }

};