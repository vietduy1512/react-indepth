import React from 'react';
import FunctionComponent from './function-component'
import ClassComponent from './class-component'

// 1. Composing Components:     Components can refer to other components in their output (like calling function and class component below)
// 2. Extracting Components:    Don’t be afraid to split components into smaller components.
// 3. Props are Read-Only:      Never modify its own props/input parameters (follow functional programming principles)

function ComponentsAndProps() {
  return (
    <div>
      <h2>Components And Props</h2>
      <FunctionComponent name="Duy" />  {/*  */}
      <ClassComponent name="Duy" />
    </div>
  );
}

export default ComponentsAndProps;