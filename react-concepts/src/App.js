import React from 'react';
import HelloWorldComponent from './components/1.hello-world/index';
import IntroducingJSX from './components/2.introducing-JSX';
import RenderingElements from './components/3.rendering-elements';
import ComponentsAndProps from './components/4.components-and-props';
import StateAndLifecycle from './components/5.state-and-lifecycle';
import HandlingEvents from './components/6.handling-events';
import { UnableToUpdateComponents, AbleToUpdateComponents } from './components/examples/update-components';

function App() {
  return (
    <div>
      <HelloWorldComponent />
      <IntroducingJSX />
      <RenderingElements />
      <ComponentsAndProps />
      <StateAndLifecycle />
      <HandlingEvents />

      <div>
        <h3>Examples</h3>
        <UnableToUpdateComponents />
        <AbleToUpdateComponents />
      </div>
    </div>
  );
}

export default App;
