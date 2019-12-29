import React, { Component } from 'react';

class InlineStyling extends Component {
  render() {
    const mystyle = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial"
    };

    return (
      <>
        <h3 style={{color: "red"}}>Basic</h3>
        <h3 style={{backgroundColor: "lightblue"}}>camelCased Property Names</h3> {/* in css: background-color */}
        <h3 style={mystyle}>JavaScript Object</h3>
      </>
    );
  }
}

export default InlineStyling;