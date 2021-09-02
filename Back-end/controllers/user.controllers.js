const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sql = require("../models/db.js");
const User = require('../models/user.models.js');
require('dotenv').config();


// Create and Save a new user
exports.signup =  (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then( hash => {
            const utilisateur = new User({
                email: req.body.email,
                password: hash,
                name: req.body.name,
                firstName: req.body.firstName,
                profession: req.body.profession,
                Admin: 0
            });
          User.create(utilisateur, (err, data) => {
              if (err)
                  res.status(500).send({
                      message:
                          err.message || "Une erreur est servenue lors de la création du User."
                  });
              else{
                  res.status(200).json({
                      isAdmin : data.Admin,
                      id: data.id,
                      email : data.email,
                      userName: data.name,
                      userFirstName: data.firstName,
                      profession: data.profession,
                      token: jwt.sign(
                          { id: data.id,
                            isAdmin : data.Admin},
                          process.env.DB_TOKEN,
                          { expiresIn: '24h' }
                        )
                  }); 
              }}); 
            })
      .catch(error => res.status(500).json({ error }));
      }



exports.login = (req, res, next) => {
    User.findOne(req.body.email, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                message: `Le user avec l'email ${req.body.email} n'a pas été trouvé.`
            });
            } else {
                res.status(500).send({
                  message: "Erreur de récupération du user avec l'email " + req.body.email
            });
          } 
        } else { 
            bcrypt.compare(req.body.password, data.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: 'Mot de passe incorrect !' });
                    }else{
                        res.status(200).json({
                              isAdmin : data.Admin,
                              email : data.email,
                              id: data.id,
                              userName: data.name,
                              userFirstName: data.firstName,
                              profession: data.profession,
                              token: jwt.sign(
                                    { id: data.id,
                                      isAdmin : data.Admin
                                    },
                                    process.env.DB_TOKEN,
                                    { expiresIn: '24h' }
                              )
                          })
                    };
            })
          .catch(error => res.status(500).json({ error }))
      } 
  });
};


// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  User.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la récuperation des Users"
      });
    else res.send(data);
  });
};


// Find a single User with a UserId
exports.findOne = (req, res) => {
  User.findById(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Le User Id ${req.params.userId} n'a pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "Erreur de recuperation du User Id" + req.params.userId
        });
      }
    } else res.send(data);
  });
};


// Update a User identified by the UserId in the request
exports.update = (req, res, next) => {
   // Validate Request
   if (!req.body) {
    res.status(400).send({
      message: "Le champ ne peut pas etre vide"
    });
  }

  bcrypt.hash(req.body.password, 10)
      .then(hash => {
        const utilisateur = new User({
          email: req.body.email,
          password: hash,
          name: req.body.name,
          firstName: req.body.firstName,
          profession: req.body.profession,
          admin: 0
        })
      User.updateById(req.params.userId, utilisateur, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Le User Id ${req.params.userId} n'a pas été trouvé.`
          });
        } else {
          res.status(500).send({
            message: "Erreur MAJ User Id " + req.params.userId
          });
        }
      } else res.send(data);
    }
  ); 
      })
      .catch(error => res.status(500).json({ error }));
};

// Delete a User with the specified UserId in the request
exports.delete = (req, res) => {
  User.remove(req.params.userId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Le User Id ${req.params.userId} n'a pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "L'id ne peut pas etre supprimé" + req.params.userId
        });
      }
    } else res.send({ message: `Le User a été supprimé` });
  });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la suppression de tous les Users."
      });
    else res.send({ message: `Tous les Users ont été supprimés!` });
  });
};



