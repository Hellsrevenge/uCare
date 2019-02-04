import Calendar from 'react-calendar/dist/entry.nostyle';
// import React from "react";
import React, { Component} from "react";
 
class CalendarEx extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
 
  render() {
    return (
      <div>
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
        />
      </div>
    );
  }
}

export default CalendarEx;