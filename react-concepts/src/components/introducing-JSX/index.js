import React from 'react';

const name = "Duy";
const element = <h2>This is {name}</h2>;  // {name} is Embedding Expressions in JSX

function IntroducingJSX() {
  return (
    <div>
      {element}
    </div>
  );
}

export default IntroducingJSX;
