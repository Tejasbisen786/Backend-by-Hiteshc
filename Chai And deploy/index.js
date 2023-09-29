require("dotenv").config();

// console.log(process.env);

const express = require("express");

const app = express();
const port = 4000;

const github_data = {
  name: "TejasBisen786",
  repo: 50,
  url: "Tejasbisen786",
  key: "gettejaskey",
};

const myNameinfo = {
  myName: "Tejas Bisen",
  clgName: "HVPM COET",
  ROllNo: "60",
  Department: "CSE",
};

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

app.get("/github", (req, res) => {
  res.json(github_data);
});
app.get("/college", (req, res) => {
  res.send(myNameinfo);
});
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
