import React from 'react';

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <p>Class Name: {this.props.name}</p>
      </div>
    );
  }
}

export default ClassComponent;