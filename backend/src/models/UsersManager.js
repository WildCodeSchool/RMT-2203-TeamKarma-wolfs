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
