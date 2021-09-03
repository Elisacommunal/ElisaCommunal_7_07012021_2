const sql = require("../models/db.js");
const jwt = require('jsonwebtoken');
const Article = require('../models/article.models.js');
const fs = require('fs');

require('dotenv').config();

// Create and Save a new article
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Le champ ne peut pas etre vide"
    });
  }
  if (!req.file) {
    const article = new Article({
      titre: req.body.titre,
      contenu: req.body.contenu,
      user_name: req.body.user_name,
      user_firstName: req.body.user_firstName,
      id_User: req.body.id_User,
      user_profilPic: req.body.user_profilPic,
      image: null
    });
    // Save Article in the database
    Article.create(article, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Une erreur est survenue lors de la création de l'article"
        });
      else res.send(data);
    });

  } else {
    const article = new Article({
      titre: req.body.titre,
      contenu: req.body.contenu,
      user_name: req.body.user_name,
      user_firstName: req.body.user_firstName,
      id_User: req.body.id_User,
      user_profilPic: req.body.user_profilPic,
      image: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    });

    Article.create(article, (err, data) => {
      if (err)
        res.status(500).send({
          message: err.message || "Une erreur est survenue lors de la création de l'article"
        });
      else res.send(data);
    });
  }
}


// Retrieve all Articles from the database.
exports.findAll = (req, res) => {
  Article.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la récuperation des Articles"
      });
    else res.send(data);
  });
};


// Find a single Article with a ArticleId
exports.findOne = (req, res) => {
  Article.findById(req.params.articleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `L'id de l'article' ${req.params.articleId} n'a pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "Erreur de recuperation de l'id de l'article" + req.params.articleId
        });
      }
    } else res.send(data);
  });
};


// Update a Article identified by the articleId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Le champ ne peut pas etre vide"
    });
  }

  Article.updateById(req.params.articleId, new Article(req.body), (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `L'id de l'article ${req.params.articleId} n'a pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "Erreur MAJ de l'id de l'article " + req.params.articleId
        });
      }
    } else res.send(data);
  });
};

// Delete a Article with the specified ArticleId in the request
exports.delete = (req, res) => {

  Article.findById(req.params.articleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `L'article avec l'id ${req.params.articleId} n'a pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "Erreur de récupération de l'article avec l'id " + req.params.articleId
        });
      }
    } else {
      if (!data.image) {
        Article.remove(req.params.articleId, (err, data) => {
          if (err) {
            if (err.kind === "not_found") {
              res.status(404).send({
                message: `L'article avec l'id ${req.params.articleId} n'a pas été trouvé.`
              });
            } else {
              res.status(500).send({
                message: "Erreur de suppression de l'article avec l'id " + req.params.articleId
              });
            }
          } else res.send({
            message: `L'article a été supprimé ! `
          });
        });
      } else {


        const filename = data.image.split('/images/')[1];
        fs.unlink(`images/${filename}`, () => {

          Article.remove(req.params.articleId, (err, data) => {
            if (err) {
              if (err.kind === "not_found") {
                res.status(404).send({
                  message: `L'article avec l'id ${req.params.articleId} n'a pas été trouvé.`
                });
              } else {
                res.status(500).send({
                  message: "Erreur de suppression de l'article avec l'id " + req.params.articleId
                });
              }
            } else res.send({
              message: `L'article a été supprimé ! `
            });
          });
        });
      }
    }
  })
}


// Delete all Articles from the database.
exports.deleteAll = (req, res) => {
  Article.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message: err.message || "Une erreur est survenue lors de la suppression de tous les Articles."
      });
    else res.send({
      message: `Tous les Articles ont été supprimés!`
    });
  });
};