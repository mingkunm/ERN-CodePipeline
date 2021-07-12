import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [response, setResponse] = useState("Oops, something went wrong...");
  useEffect(() => {
    async function checkAPIRoute() {
      try {
        let host = null;
        window.location.hostname === "localhost"
          ? (host = "http://localhost:5000/api")
          : (host = "http://ec2-44-194-64-34.compute-1.amazonaws.com/api");
        const response = await fetch(host);
        if (response.status === 200) {
          setResponse("a Success!!!");
        }
      } catch (err) {
        setResponse(`Oops, something went wrong... Error: ${err}`);
      }
    }
    checkAPIRoute();
  }, [response]);

  console.log(window.location.hostname === "localhost");

  return (
    <div className="App">
      <header className="App-header">
        <h1>ERM Stack APP with CD on AWS!</h1>
        <h2>CD Check...</h2>
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
      </header>
    </div>
  );
}

export default App;
