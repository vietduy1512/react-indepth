import React from 'react';

const name = "Duy";
const element = <div>This is {name}</div>;  // {name} is Embedding Expressions in JSX

function IntroducingJSX() {
  return (
    <div>
      <h2>Introducing JSX</h2>
      {element}
    </div>
  );
}

export default IntroducingJSX;
