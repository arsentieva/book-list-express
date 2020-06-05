const express = require("express");
const routes = require("./routes.js");

const app = express();
app.set("view engine", "pug");
app.use(routes);

//TODO

const port = 8080;
app.listen(port, () => console.log(`Listing on port ${port}...`));
