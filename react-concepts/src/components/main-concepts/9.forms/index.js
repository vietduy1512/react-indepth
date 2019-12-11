import React from "react";

// 1. Extension: https://jaredpalmer.com/formik

// 2. Controlled component: Specifying the value prop on a controlled component prevents the user from
//      changing the input unless you desire so. (example: <input value="this.state.name" />)

// 3. Controlled Input Null Value: the input is editable if "value" set to undefined or null. (example: <input value={null} />)

class BasicForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        essay: '',
        flavor: ''
      };

      this.handleChange = this.handleChange.bind(this);
      this.handleNameChange = this.handleNameChange.bind(this);
      this.handleEssayChange = this.handleEssayChange.bind(this);
      this.handleFlavorChange = this.handleFlavorChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({name: event.target.value.toUpperCase(), essay: event.target.value});
      }
  
    handleNameChange(event) {
      this.setState({name: event.target.value.toUpperCase()});
    }

    handleEssayChange(event) {
        this.setState({essay: event.target.value});
    }
    
    handleFlavorChange(event) {
        this.setState({flavor: event.target.value});
    }

    handleSubmit(event) {
      alert(`A form was submitted \nName:${this.state.name} - Essay:${this.state.essay} - Flavor:${this.state.flavor}`);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: 
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <br/>

          <label>
            Essay:
            <textarea value={this.state.essay} onChange={this.handleEssayChange} />
          </label>
          <br/>

          <label>
            Pick your favorite flavor:
            <select value={this.state.flavor} onChange={this.handleFlavorChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <br/>

          <input type="file" />
          <br/>

          <input type="submit" value="Submit" />
        </form>
      );
    }
}


class HandleMultipleInputForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        essay: '',
        flavor: ''
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({[name]: value});     // Using ES6
      }

    handleSubmit(event) {
      alert(`A form was submitted \nName:${this.state.name} - Essay:${this.state.essay} - Flavor:${this.state.flavor}`);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name: 
            <input type="text" name="name" value={this.state.name} onChange={this.handleInputChange} />
          </label>
          <br/>

          <label>
            Essay:
            <textarea name="essay" value={this.state.essay} onChange={this.handleInputChange} />
          </label>
          <br/>

          <label>
            Pick your favorite flavor:
            <select name="flavor" value={this.state.flavor} onChange={this.handleInputChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label>
          <br/>

          <input type="file" />
          <br/>

          <input type="submit" value="Submit" />
        </form>
      );
    }
}

function Form() {
    return (
        <>
            <h4>Basic form</h4>
            <BasicForm />
            <hr/>
            <h4>Handle multiple input</h4>
            <HandleMultipleInputForm />
        </>
    )
}

export default Form;