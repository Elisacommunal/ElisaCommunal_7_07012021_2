const jwt = require('jsonwebtoken');
const sql = require("../models/db.js");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
    try{
        console.log("authAdmin");
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, process.env.DB_TOKEN);

    const isAdmin = decodedToken.isAdmin;
    console.log("Admin", isAdmin);

            if (isAdmin === 1) {
            console.log("action autorisée");
            next();
        } else {
            res.status(403).json({ message: "Action non autorisée" });

            console.log(`Action non autorisée`);
        }
    }
    catch{
        res.status(401).json({error: error | 'Requête non authentifiée !'});
    }

};