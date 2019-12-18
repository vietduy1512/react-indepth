import React from "react";
import "./App.css";
import Posts from "./components/Posts";
import PostForm from "./components/Postform";

function App() {
  return (
    <div>
      <PostForm></PostForm>
      <hr />
      <Posts></Posts>
    </div>
  );
}

export default App;
