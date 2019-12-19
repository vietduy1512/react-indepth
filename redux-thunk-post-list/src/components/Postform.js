import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { basicCreatePost, thunkCreatePost } from "../actions/postAction";
import { NEW_POST } from "../actions/types";

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    //this.props.basicCreatePost(post);
    //this.props.thunkCreatePost(post);
    //this.props.dispatchCreatePost(post);
    this.props.dispatchCreatePostUsingActionCreator(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Title: </label>
            <br />
            <input
              type="text"
              name="title"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label>Body: </label>
            <br />
            <textarea
              name="body"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

// 1st way to dispatch action - using basic redux
//export default connect(null, { basicCreatePost })(PostForm);

// 2nd way to dispatch action - using react-thunk
//export default connect(null, { thunkCreatePost })(PostForm);

// 3rd way to dispatch action
const mapDispatchToProps = dispatch => {
  return {
    dispatchCreatePost: post =>
      dispatch({
        type: NEW_POST,
        payload: post
      }),
    dispatchCreatePostUsingActionCreator: post =>
      dispatch(basicCreatePost(post))
  };
};

export default connect(null, mapDispatchToProps)(PostForm);
