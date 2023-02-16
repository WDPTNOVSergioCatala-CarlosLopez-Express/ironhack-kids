require("dotenv").config();

const express = require("express");
const logger = require("morgan");

const app = express();

require("./config/hbs.config");

app.set("view engine", "hbs");
app.set("views", `${__dirname}/views`);

const routes = require("./config/routes.config");
app.use("/", routes);

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`App listening on port ${port}`));
