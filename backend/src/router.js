const express = require("express");

const { UsersController } = require("./controllers");
const auth = require("./middlewares/auth");

const router = express.Router();

router.get("/users/list", auth, UsersController.listUsers);
router.post("/users/getUser", auth, UsersController.selectUser);
router.post("/signUp", UsersController.signUp);
router.post("/signIn", UsersController.signIn);

module.exports = router;
