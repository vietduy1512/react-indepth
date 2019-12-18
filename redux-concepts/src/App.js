import React from "react";
import "./App.css";
import { Provider } from "react-redux";

import Posts from "./components/Posts";
import PostForm from "./components/Postform";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <PostForm></PostForm>
      <hr />
      <Posts></Posts>
    </Provider>
  );
}

export default App;
