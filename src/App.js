import logo from "./logo.svg";
import "./App.css";
import GridContainer from "./components/organism/Grid";
import React from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* This will change to the page eventually */}
        <GridContainer />
      </header>
    </div>
  );
}

export default App;
