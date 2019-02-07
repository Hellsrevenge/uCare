import React, { Component } from 'react';
import DateTimePicker from 'react-datetime-picker';
import './CalendarAppt.css';

class CalendarAppt extends Component {
  state = {
    value: new Date(),
  };

  onChange = value => {
      this.setState({ value })
      this.props.onChange(this.props.id , value);
  };

  render() {
    const { value } = this.state;

    return (
      <div className="Sample">
        <div className="Sample__container">
          {/* <main className="Sample__container__content"> */}
            <DateTimePicker
              onChange={this.onChange}
              value={value}
            />
          {/* </main> */}
        </div>
      </div>
    );
  }
}

export default CalendarAppt;