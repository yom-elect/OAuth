import express from "express";
const app = express();

/* GET home page. */
app.use("/", require("./home"));
app.use("/auth", require("./auth/auth-router"));
module.exports = app;
