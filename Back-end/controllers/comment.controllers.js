const sql = require("../models/db.js");
const Comment = require('../models/comment.models.js');
require('dotenv').config();

// Create and Save a new Comment
exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Le champ ne peut pas etre vide"
      });
    }
    const comment = new Comment({
        commentaire: req.body.commentaire,
        id_article: req.body.id_article,
        id_User: req.body.id_User
      });


    // Save Comment in the database
    Comment.create(comment, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Une erreur est survenue lors de la création du commentaire"
        });
      else res.send(data);
    });
  };
// Retrieve all Comment from the database.
exports.findAll = (req, res) => {
    Comment.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la récuperation des commentaires"
      });
    else res.send(data);
  });
};

exports.findComsWithArticleId = (req, res) => {
  Comment.findByArticleId(req.params.articleId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Les commentaires  de l'article avec l'id ${req.params.articleId} n'ont pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "Erreur de récupération des commentaires correspondant à l'article avec l'id " + req.params.articleId
        });
      }
    } else res.send(data);
  });
};

// Find a single Comment with a CommentId
exports.findOne = (req, res) => {
    Comment.findById(req.params.commentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `L'id du commentaire' ${req.params.commentId} n'a pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "Erreur de recuperation de l'id du commentaire" + req.params.commentId
        });
      }
    } else res.send(data);
  });
};


// Update a Comment identified by the commentId in the request
exports.update = (req, res) => {
  // Validate Request
  if (!req.body) {
    res.status(400).send({
      message: "Le champ ne peut pas etre vide"
    });
  }

  Comment.updateById(req.params.commentId, new Comment(req.body), (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `L'id du commentaire ${req.params.commentId} n'a pas été trouvé.`
          });
        } else {
          res.status(500).send({
            message: "Erreur MAJ de l'id du commentaire" + req.params.commentId
          });
        }
      } else res.send(data);
    }
  );
};

// Delete a comment with the specified commentId in the request
exports.delete = (req, res) => {
    Comment.remove(req.params.commentId, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `L'id du commentaire ${req.params.commentId} n'a pas été trouvé.`
        });
      } else {
        res.status(500).send({
          message: "L'id ne peut pas etre supprimé" + req.params.commentId
        });
      }
    } else res.send({ message: `Le commentaire a été supprimé` });
  });
};

// Delete all Comments from the database.
exports.deleteAll = (req, res) => {
    Comment.removeAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Une erreur est survenue lors de la suppression de tous les commentaires."
      });
    else res.send({ message: `Tous les commentaires ont été supprimés!` });
  });
};