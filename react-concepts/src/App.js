import React from 'react';
import HelloWorldComponent from './components/hello-world/index';
import IntroducingJSX from './components/introducing-JSX';
import RenderingElements from './components/rendering-elements';
import ComponentsAndProps from './components/components-and-props';
import StateAndLifecycle from './components/state-and-lifecycle';
import { UnableToUpdateComponents, AbleToUpdateComponents } from './components/examples/update-components';

function App() {
  return (
    <div>
      <HelloWorldComponent />
      <IntroducingJSX />
      <RenderingElements />
      <ComponentsAndProps />
      <StateAndLifecycle />

      <div>
        <h3>Examples</h3>
        <UnableToUpdateComponents />
        <AbleToUpdateComponents />
      </div>
    </div>
  );
}

export default App;
