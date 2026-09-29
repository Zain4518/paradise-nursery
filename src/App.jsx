import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="landing-page">
        <h1>Paradise Nursery</h1>

        <p>
          Welcome to Paradise Nursery, your destination for beautiful
          and healthy plants.
        </p>

        <Link to="/plants">
          <button className="get-started">Get Started</button>
        </Link>
      </div>
    </div>
  );
}

export default App;
