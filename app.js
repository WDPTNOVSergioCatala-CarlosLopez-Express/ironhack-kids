const express = require('express');
const hbs = require('hbs');

const app = express();

require("./config/hbs.config")

app.set("view engine", "hbs")
app.set("views", `${__dirname}/views`)