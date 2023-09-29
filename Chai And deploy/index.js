require("dotenv").config();

// console.log(process.env);

const express = require("express");

const app = express();
const port = 4000;
app.get("/", (req, res) => {
  res.send("Tejas Bisen");
});

app.get("/facebook", (req, res) => {
  res.send("Welcome to Facebook");
});
app.get("/login", (req, res) => {
  res.send("<h1> Please Login at Facebook </h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>  Chai And Code </h2>");
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
