import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import Posts from "./components/Posts";
import PostForm from "./components/Postform";

const store = createStore(()=> [], {}, applyMiddleware());

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
