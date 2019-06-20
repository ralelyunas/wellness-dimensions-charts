import React from 'react';
import './App.css';
import { StackedTargetChart } from 'wellness-dimensions-charts'

class App extends React.Component {
  constructor() {
    super()
    this.state = { 
      explicitProps: {
        width: 200,
        target: 7,
        overflowAreaCount: 0,
        overflowStyle: "hidden",
        categoryCaption: "Aerobic Workouts",
        timePeriodCaption: "Week of Sept 4, 2019",
        timestampFormat: "dddd, h:MM tt",
        stackItems: [
          {event: "Swimming", timestamp: new Date()},
          {event: "Swimming", timestamp: new Date()},
          {event: "Swimming", timestamp: new Date()},
          {event: "Swimming", timestamp: new Date()},
          {event: "Swimming", timestamp: new Date()}
        ],
        bgColor: "#88aa00",
        stackItemColor: "#346f4d"
      },
      fieldError: {
        width: false,
        target: false
      }
    }
    this.state.editedProps = Object.assign({},this.state.explicitProps)
    this.handleChange = this.handleChange.bind(this)
    this.handleFocus = this.handleFocus.bind(this)
  }

  handleFocus(e) {
    e.target.select()
  }

  handleChange(e) {
    const { name, value } = e.target
    var fieldErrorValue = false
    if (name === 'width' || name === 'target') {
      fieldErrorValue = value === '' || isNaN(value)
    }
    this.setState(state => {
      if (fieldErrorValue) {
        return { editedProps: {...state.editedProps, [name]: value},
                 fieldError: { ...state.fieldError, [name]: fieldErrorValue }}
      }
      else {
        return { explicitProps: {...state.explicitProps, [name]: value},
                 editedProps: {...state.editedProps, [name]: value},
                 fieldError: { ...state.fieldError, [name]: fieldErrorValue }}
    }})
  }

  render(props) {
  return (
    <div className="App"
    style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
      <div style={{ padding: "50px", textAlign: "left"}}>
        <h1 style={{ 
          textAlign: "left", 
          fontFamily: "'Source Sans Pro', 'Lucida Grande', sans-serif",
          fontWeight: 700 }}>
          StackedTargetChart
        </h1>
        <StackedTargetChart 
          {...this.state.explicitProps}
          style={{ border: "solid 2px #888888", margin: "20 30 20 50" }} />
        <h2> Properties </h2>
        <h3> width </h3>
        <p> 
          Sets the width of the chart, the height will be automatically calculated.
        </p>
        <input type="text" name="width" value={this.state.editedProps.width} 
               onChange={this.handleChange} onFocus={this.handleFocus} 
               style={{ border: this.state.fieldError.width ? "solid 2px red" : "solid 1px black" }}/>
        <h3> target </h3>
        <p> 
          This is the number of events needed to fufil the target amount.  It will affect the height of the chart and the target number.
        </p>
        <input type="text" name="target" value={this.state.editedProps.target} 
               onChange={this.handleChange} onFocus={this.handleFocus} 
               style={{ border: this.state.fieldError.target ? "solid 2px red" : "solid 1px black" }}/>
      </div>
    </div>
  )}
}

export default App;
