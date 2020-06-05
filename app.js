const express = require("express");
const morgan = require("morgan");

const routes = require("./routes.js");

const app = express();
app.set("view engine", "pug");

app.use(morgan("dev"));
app.use(routes);

//TODO

// Catch unhandled requests and forward to error handler.
app.use((req, res, next) => {
  const err = new Error("The requested page could not be found");
  err.status = 404;
  next(err);
});

//Custom error handler

// Error handler to log errors
app.use((err, req, res, next) => {
  console.error(err);
  next(err);
});

//Error handler for "Page not found" 404
app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status = 404;
    res.render("page-not-found", { title: "Page not found" });
  } else {
    next(err);
  }
});

//Handle Generic errors
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  let isProd = process.env.NODE_ENV === "production";
  let message = null;
  let stack = null;
  if (!isProd) {
    message = err.message;
    stack = err.stack;
  }
  res.render("error", {
    title: "Server Error",
    message,
    stack,
  });
});

//this will be moved to the ./bin/www file
// const port = 8080;
// app.listen(port, () => console.log(`Listing on port ${port}...`));

module.exports = app;
