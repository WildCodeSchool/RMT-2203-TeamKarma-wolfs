const express = require("express");

const { UsersController } = require("./controllers");
const auth = require("./middlewares/auth");

const router = express.Router();

router.get("/users/list", auth, UsersController.listUsers);
router.get("/users/debug", UsersController.debug);
router.post("/signUp", UsersController.signUp);
router.post("/signIn", UsersController.signIn);

// router.get("/items", ItemController.browse);
// router.get("/items/:id", ItemController.read);
// router.put("/items/:id", ItemController.edit);
// router.post("/items", ItemController.add);
// router.delete("/items/:id", ItemController.delete);

module.exports = router;
