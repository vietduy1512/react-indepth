import React from 'react';
import FunctionComponent from './function-component'
import ClassComponent from './class-component'

function ComponentsAndProps() {
  return (
    <div>
      <h2>Components And Props</h2>
      <FunctionComponent name="Duy" />  {/* Composing Components: is calling other components */}
      <ClassComponent name="Duy" />
    </div>
  );
}

export default ComponentsAndProps;