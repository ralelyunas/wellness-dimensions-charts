import React from 'react';
import './App.css';
import { StackedTargetChart } from 'wellness-dimensions-charts'

function App() {
  return (
    <div className="App"
    style={{ display: "flex", flexDirection: "column" }}>
      <div>
        <h2> Stacked Target Chart </h2>
        <StackedTargetChart /> 
      </div>
    </div>
  );
}

export default App;
