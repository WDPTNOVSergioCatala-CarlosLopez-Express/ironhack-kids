require("dotenv").config();

const express = require("express");
const logger = require("morgan");

require("./config/db.config");

const app = express();
app.use(express.urlencoded({extended: true}))

require("./config/hbs.config");
const { session, loadSessionUser } = require('./config/session.config')

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

app.use(logger("dev"))

app.use(session);
app.use(loadSessionUser);

app.use((req, res, next) => {
    res.locals.currentPath = req.path;
    next();
  });

const routes = require("./config/routes.config");
app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening on port ${port}`));
