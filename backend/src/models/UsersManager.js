const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  static table = "users";

  findOne(userId) {
    return this.connection.query(
      `SELECT * from ${UsersManager.table} WHERE id = ?`,
      [userId]
    );
  }

  selectOneName(id) {
    return this.connection.query(
      `select username from ${this.table} where id = ?`,
      [id]
    );
  }

  findOneByEmail(userEmail) {
    return this.connection.query(
      `SELECT * from ${UsersManager.table} WHERE email = ?`,
      [userEmail]
    );
  }

  addOne(user) {
    const { username, email, password } = user;
    return this.connection.query(
      `INSERT INTO ${UsersManager.table} (username, email, password) VALUES (?, ?, ?)`,
      [username, email, password]
    );
  }
}

module.exports = UsersManager;

//   exports.findOne = (userId) => {
//   return db
//     .promise()
//     .query("SELECT * from 'users' WHERE id = ?", [userId])
//     .then(([result]) => result);
// };

// exports.findAll = () => {
//   return db
//     .promise()
//     .query("SELECT * from 'users'")
//     .then(([result]) => result);
// };

// exports.findOneByEmail = (userEmail) => {
//   return db
//     .promise()
//     .query("SELECT * from 'users' WHERE email = ?", [userEmail])
//     .then(([result]) => result);
// };

// exports.addOne = (user) => {
//   const { name, email, hash } = user;
//   return db
//     .promise()
//     .query("INSERT INTO 'users' (name, email, password) VALUES (?, ?, ?)", [
//       name,
//       email,
//       hash,
//     ])
//     .then(([result]) => {
//       return { id: result.insertId, name, email };
//     });
// };
