import React from 'react';

// 1. Using handling events:
//    + Bind 'this' to function
//    + Using class fields to bind callbacks
//    + Using arrow function (*)

class HandlingEvents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isToggleOn: true
    };
  }

  handleClick(increment) {
    this.setState(state => ({
      count: state.count + increment,
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      <div>
        <h2>Handling Events</h2>
        <button type="button" className="btn btn-outline-primary" onClick={(e) => this.handleClick(2, e)}> {/* Using arrow function to bind 'this' */}
          {this.state.isToggleOn ? 'ON' : 'OFF'} - {this.state.count}
        </button>
      </div>
    );
  }
}

export default HandlingEvents;