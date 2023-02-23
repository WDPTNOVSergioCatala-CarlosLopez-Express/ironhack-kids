const express = require("express");

const multer = require('../config/multer.config');
const users = require("../controllers/users.controller");
const common = require("../controllers/common.controller");
const messages = require("../controllers/messages.controller");

const router = express.Router();

router.get("/", common.home);
router.get("/home", common.home)

router.get("/users/new" ,users.create);
router.post("/users", multer.single('profilePic'), users.doCreate);

router.get("/login", users.login);
router.post("/login", users.doLogin);

router.get("/user", users.user);

router.get("/messages", messages.create);
router.post("messages", messages.doCreate);

router.get("/aboutUs", common.aboutUS)


module.exports = router;