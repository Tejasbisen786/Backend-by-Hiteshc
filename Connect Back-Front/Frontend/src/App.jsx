import React, { useEffect, useState } from "react";
import axios from "axios";

// cors =>  cross origin request having diffent port url considered cors

const App = () => {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes") // Proxy Concept Comes here
      .then((response) => {
        setJokes(response.data);
      })

      .catch((eror) => {
        console.log(eror);
      });
  });

  return (
    <>
      <h1> Chai And Full Stack</h1>
      <p> JOKES : {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3> {joke.title}</h3>
          <p> {joke.Content}</p>
        </div>
      ))}
    </>
  );
};

export default App;
