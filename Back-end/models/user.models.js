
  const sql = require("./db.js");

  const User = function(client) {
      this.email = client.email;
      this.password = client.password;
      this.name = client.name;
      this.firstName = client.firstName;
      this.profession = client.profession;
      this.Admin = client.Admin;
      this.profilPic = client.profilPic
  };
  
    User.create = async (newUtilisateur, result) => {
      let sign = await sql.query("INSERT INTO user SET ?", newUtilisateur, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
        console.log("created user: ", { id: res.insertId, ...newUtilisateur });
       return result(null, { id: res.insertId, ...newUtilisateur });
      });
      return sign
    };


  
    User.getAll = result => {
        sql.query("SELECT * FROM user", (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log("user: ", res);
          result(null, res);
        });
      };

      User.findOne= (email, result) => {
        sql.query("SELECT * FROM user WHERE email = ?", [email], (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
    
          if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
          }
          // not found user with the id
          result({ kind: "not_found" }, null);
        });
      };
      User.findById = (userId, result) => {
        sql.query(`SELECT * FROM user WHERE id = ${userId}`, (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
          }
      
          if (res.length) {
            console.log("found user: ", res[0]);
            result(null, res[0]);
            return;
          }
      
          // not found User with the id
          result({ kind: "not_found" }, null);
        });
      };


      User.updateById = (id, user, result) => {
        sql.query(
          "UPDATE user SET email = ?, password = ?, name = ?, firstName = ?, profession = ?, Admin = ?, profilPic= ? WHERE id = ?",
          [user.email, user.password, user.name, user.firstName, user.profession, user.Admin, user.profilPic, id],
          (err, res) => {
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
      
            console.log("updated User: ", { id: id, ...user });
            result(null, { id: id, ...user });
          }
        );
      };


      User.remove = (id, result) => {
        sql.query("DELETE FROM user WHERE id = ?", id, (err, res) => {
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
      
          console.log("deleted user with id: ", id);
          result(null, res);
        });
      };
      

      User.removeAll = result => {
        sql.query("DELETE FROM user", (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
      
          console.log(`deleted ${res.affectedRows} user`);
          result(null, res);
        });
      };
    
  
  module.exports = User;