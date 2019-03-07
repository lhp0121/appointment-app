import React, { Component } from "react";
import "./App.css";
import TimeSlots from "./TimeSlots/TimeSlots";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header> Schedule an Appointment! </header> <TimeSlots />
      </div>
    );
  }
}

export default App;
