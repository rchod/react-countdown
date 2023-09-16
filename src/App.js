import React from "react";
import "./style.css";
import CountdownTimer from './CountdownTimer'; // Update the path to your component

export default function App() {
  return (
    <div>
      <h1>Countdown Timer</h1>
      <CountdownTimer minutes={0} seconds={22} /> {/* Adjust the time as needed */}
    </div>
  );
}
