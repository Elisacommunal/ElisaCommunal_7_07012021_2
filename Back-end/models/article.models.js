const sql = require("./db.js");

const Article = function(article) {
    this.titre = article.titre;
    this.contenu = article.contenu;
    this.user_name = article.user_name;
    this.user_firstName = article.user_firstName;
    this.id_User = article.id_User;
    this.user_profilPic = article.user_profilPic;
    this.image = article.image
};
  
    Article.create = (newArticle, result) => {
      sql.query("INSERT INTO article SET ?", newArticle, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
    
        console.log("création article: ", { id: res.insertId, ...newArticle });
        result(null, { id: res.insertId, ...newArticle });
      });
    };
  
    Article.getAll = result => {
        sql.query("SELECT * FROM article", (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log("article: ", res);
          result(null, res);
        });
      };

      Article.findById = (articleId, result) => {
        sql.query(`SELECT * FROM article WHERE id = ?`, [articleId], (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
      
          if (res.length) {
            console.log("article trouvé: ", res[0]);
            result(null, res[0]);
            return;
          }
      
          // not found User with the id
          result({ kind: "not_found" }, null);
        });
      };


      Article.updateById = (id, article, result) => {
        sql.query(
          "UPDATE article SET titre = ?, contenu = ? WHERE id = ?",
          [article.titre, article.contenu, id],
          (err, res) => {
            if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }
      
            if (res.affectedRows == 0) {
              // not found article with the id
              result({ kind: "not_found" }, null);
              return;
            }
      
            console.log("article mis à jour: ", { id: id, ...article });
            result(null, { id: id, ...article });
          }
        );
      };


      Article.remove = (id, result) => {
        sql.query("DELETE FROM article WHERE id = ?", id, (err, res) => {
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
      
          console.log("article supprimé: ", id);
          result(null, res);
        });
      };
      

      Article.removeAll = result => {
        sql.query("DELETE FROM article", (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log(`articles supprimés ${res.affectedRows}`);
          result(null, res);
        });
      };
    
  
  module.exports = Article;