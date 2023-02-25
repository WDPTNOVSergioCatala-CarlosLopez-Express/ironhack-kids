const express = require("express");

const multer = require('../config/multer.config');
const secure = require('../middlewares/secure.mid');
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

router.get('/logout', secure.requireLogin, users.logout)

router.get("/user",  secure.requireLogin, users.user);
router.post("/user/edit", secure.requireLogin, users.edit)

router.get("/messages", secure.requireLogin, messages.create);
router.post("/messages", secure.requireLogin, messages.doCreate);

router.get("/aboutUs", common.aboutUS)
router.get("/lobby", secure.requireLogin, common.lobby)


module.exports = router;