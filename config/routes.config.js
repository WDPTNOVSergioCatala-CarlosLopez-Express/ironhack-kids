const express = require("express");

const multer = require("../config/multer.config");
const secure = require("../middlewares/secure.mid");
const users = require("../controllers/users.controller");
const common = require("../controllers/common.controller");
const messages = require("../controllers/messages.controller");
const lobby = require("../controllers/lobby.controller");
const classroom = require("../controllers/classroom.controller")

const router = express.Router();

router.get("/", common.home);
router.get("/home", common.home);

router.get("/users/new", users.create);
router.post("/users", multer.single("profilePic"), users.doCreate);

router.get("/login", users.login);
router.post("/login", users.doLogin);

router.get("/logout", secure.requireLogin, users.logout);

router.get("/user", secure.requireLogin, users.user);
router.post("/user/edit", secure.requireLogin, users.edit);

router.get("/messages/:id/chat", secure.requireLogin, messages.list);
router.post("/messages/:id/chat", secure.requireLogin, messages.doCreate);

router.get("/aboutUs", common.aboutUS);
router.get("/lobby", secure.requireLogin, secure.requireTeacher, lobby.lobby);
router.get(
  "/classroom",
  secure.requireLogin,
  secure.requireStudent,
  classroom.classroom
);

router.get(
  "/gestion",
  secure.requireLogin,
  secure.requireTeacher,
  common.gestion
);

module.exports = router;
