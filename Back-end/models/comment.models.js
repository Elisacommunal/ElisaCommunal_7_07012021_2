const sql = require("./db.js");

const Comment = function(comment) {
    this.commentaire = comment.commentaire
    this.id_article = comment.id_article
    this.id_User = comment.id_User
};
  
Comment.create = (newComment, result) => {
      sql.query("INSERT INTO commentaire SET ?", newComment, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("création commentaire : ", { id: res.insertId, ...newComment });
        result(null, { id: res.insertId, ...newComment });
      });
    };
  
    Comment.getAll = result => {
        sql.query("SELECT * FROM commentaire", (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log("commentaire: ", res);
          result(null, res);
        });
      };

      Comment.findById = (commentId, result) => {
        sql.query(`SELECT * FROM commentaire WHERE id = ${commentId}`, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
      
          if (res.length) {
            console.log("commentaire trouvé: ", res[0]);
            result(null, res[0]);
            return;
          }
      
          // not found User with the id
          result({ kind: "not_found" }, null);
        });
      };

      Comment.findByArticleId = (articleId, result) => {
        sql.query(`SELECT * FROM commentaire WHERE id_article = ${articleId}`, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
    
          if (res.length) {
            console.log("found comments of the article: ", res);
            result(null, res);
            return;
          }
    
          // not found article with the id
          result({ kind: "not_found" }, null);
        });
      };

      Comment.updateById = (id, comment, result) => {
        sql.query(
          "UPDATE commentaire SET commentaire = ? WHERE id = ?",
          [comment.commentaire, id],
          (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }
      
            if (res.affectedRows == 0) {
              // not found commentaire with the id
              result({ kind: "not_found" }, null);
              return;
            }
      
            console.log("commentaire mis à jour: ", { id: id, ...comment });
            result(null, { id: id, ...comment });
          }
        );
      };


      Comment.remove = (id, result) => {
        sql.query("DELETE FROM commentaire WHERE id = ?", id, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          if (res.affectedRows == 0) {
            // not found User with the id
            result({ kind: "not_found" }, null);
            return;
          }
      
          console.log("commentaire supprimé: ", id);
          result(null, res);
        });
      };
      

      Comment.removeAll = result => {
        sql.query("DELETE FROM commentaire", (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log(`commentaires supprimés ${res.affectedRows}`);
          result(null, res);
        });
      };
    
  
  module.exports = Comment;