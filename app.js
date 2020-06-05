const express = require("express");
const morgan = require("morgan");

const routes = require("./routes.js");

const app = express();
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(routes);

//TODO

//this will be moved to the ./bin/www file
// const port = 8080;
// app.listen(port, () => console.log(`Listing on port ${port}...`));

module.exports = app;
