import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [response, setResponse] = useState("Oops, something went wrong...");
  useEffect(() => {
    async function checkAPIRoute() {
      try {
        const host = process.env.REACT_APP_HOST || "http://localhost:5000";
        const response = await fetch(
          `http://ec2-44-194-64-34.compute-1.amazonaws.com/api`
        );
        if (response.status === 200) {
          setResponse("a Success!!!");
        }
      } catch (err) {
        setResponse(`Oops, something went wrong... Error: ${err}`);
      }
    }
    checkAPIRoute();
  }, [response]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>ERM Stack APP with CD on AWS!</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
        <h1>The API call is...</h1>
        <h3>{response}</h3>
        <h3>{process.env.REACT_APP_HOST}</h3>
      </header>
    </div>
  );
}

export default App;
