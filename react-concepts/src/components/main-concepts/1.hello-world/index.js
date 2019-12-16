import React from 'react';

function CreateElement() {
  return React.createElement(
    'div', 
    {className: "create"}, 
    React.createElement('h5', null, 'From "Create Element"')
  );
}

let AnonymouseFunction = () => {
  return <h5>From "Anonymous Function"</h5>
}

function HelloWorld() {
  return (
    <div>
      <h2>Hello World</h2>
      <CreateElement />
      <AnonymouseFunction />
    </div>
  );
}

export default HelloWorld;
