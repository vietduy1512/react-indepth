import React from "react";

function ThinkingInReact() {
  const url = "https://reactjs.org/docs/thinking-in-react.html";
  return (
    <>
      <h2>Thinking in React</h2>
      <a href={url} class="btn btn-primary btn-lg active" role="button" aria-pressed="true">Read more</a>
    </>
  )
}

export default ThinkingInReact;