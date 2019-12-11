import React from "react";

  class StringInput extends React.Component {
    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(e) {
      this.props.handleStringChange(e.target.value);
    }
  
    render() {
      return (
        <fieldset>
          <legend>Enter string:</legend>
          <input value={this.props.string}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }
  
  class Template extends React.Component {
    constructor(props) {
      super(props);
      this.handleUpperCase = this.handleUpperCase.bind(this);
      this.handleLowerCase = this.handleLowerCase.bind(this);
      this.state = {string: ''};
    }
  
    handleUpperCase(string) {
      this.setState({string: string.toUpperCase()});
    }
  
    handleLowerCase(string) {
      this.setState({string: string.toLowerCase()});
    }
  
    render() {
      return (
        <div>
          <StringInput
            string={this.state.string}
            handleStringChange={this.handleUpperCase} />
          <StringInput
            string={this.state.string}
            handleStringChange={this.handleLowerCase} />
        </div>
      );
    }
  }
  
export default Template;