const express = require("express");

const users = require("../controllers/users.controller");
const common = require("../controllers/common.controller");

const router = express.Router();

router.get("/", common.home);
router.get("/home", common.home)

router.get("/users/new", users.create);
router.post("/users", users.doCreate);

router.get("/login", users.login);
//router.post("/login", users.doLogin);

module.exports = router;