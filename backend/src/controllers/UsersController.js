require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const models = require("../models");

class UsersController {
  static debug = (req, res) => {
    models.users
      .findOneByEmail(req.body.email)
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static listUsers = (req, res) => {
    models.users
      .findAll()
      .then(([rows]) => {
        res.send(rows);
      })
      .catch((err) => {
        console.error(err);
        res.sendStatus(500);
      });
  };

  static signUp = (req, res) => {
    bcrypt
      .hash(req.body.password, 10)
      .then((hash) => {
        const user = {
          username: req.body.username,
          email: req.body.email,
          password: hash,
        };
        models.users
          .addOne(user)
          .then((info) => res.status(201).json(info))
          .catch((err) => res.status(500).send({ err }));
      })
      .catch((err) => res.status(500).json({ err }));
  };

  static signIn = (req, res) => {
    models.users
      .findOneByEmail(req.body.email)
      .then((user) => {
        return user.length === 0
          ? res.status(401).json({ error: "User not found" })
          : bcrypt
              .compare(req.body.password, user[0][0].password)
              .then((valid) => {
                if (!valid) {
                  return res.status(401).json({ error: "Wrong password" });
                }
                return res.status(200).json({
                  userUuid: user[0][0].id,
                  token: jwt.sign(
                    { userId: user[0][0].id },
                    process.env.TOKEN_SECRET,
                    {
                      expiresIn: "24h",
                    }
                  ),
                });
              })
              .catch((err) => {
                res
                  .status(500)
                  .json({ error: "Unable to parse token: " } + { err });
              });
      })
      .catch((err) => {
        res
          .status(500)
          .json({ err: "The query encountered an error: " } + { err });
      });
  };
}

module.exports = UsersController;
