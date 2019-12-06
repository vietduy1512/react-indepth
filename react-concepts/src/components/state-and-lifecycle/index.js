import React from 'react';

// 1. It’s very important to free up resources taken by the components when they are destroyed
// 2. Using State Correctly
//      + Do Not Modify State Directly:       use setState() instead
//      + State Updates May Be Asynchronous:  React may batch multiple setState() calls into a single update for performance. 
//                                            Because this.props and this.state may be updated asynchronously, you should not rely on their values for calculating the next state.
//                                            => use setState(function) instead
//      + State Updates are Merged:           React merges the object you provide into the current state object.

// 3. The Data Flows Down:  can only affect components “below” them in the tree

class StateAndLifecycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({     // this will trigger React to re-render
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h2>State And Lifecycle</h2>
        <span>Time: {this.state.date.toLocaleTimeString()}</span>
      </div>
    );
  }
}

export default StateAndLifecycle;
