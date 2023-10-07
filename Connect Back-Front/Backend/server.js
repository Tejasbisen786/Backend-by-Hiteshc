// const express=require('express')   // common js method

import express from "express"; // module js method

const app = express();

// app.get("/", (req, res) => {
//   res.send("Server is ready");
// });
// get a list of 5 jokes    
//  /api/jokes  Standard Way
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A Joke",
      Content: "This is a Joke",
    },
    {
      id: 2,
      title: "A Joke",
      Content: "This is a  B Joke",
    },
    {
      id: 3,
      title: "A Joke",
      Content: "This is a C  Joke",
    },
  ];

  res.send(jokes);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server at https://localhost/${port}`);
});
