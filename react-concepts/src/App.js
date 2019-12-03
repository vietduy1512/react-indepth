import React from 'react';
import HelloWorldComponent from './components/hello-world/index';
import IntroducingJSX from './components/introducing-JSX';
import RenderingElements from './components/rendering-elements';
import ComponentsAndProps from './components/components-and-props';

function App() {
  return (
    <div>
      <HelloWorldComponent />
      <IntroducingJSX />
      <RenderingElements />
      <ComponentsAndProps />
    </div>
  );
}

export default App;
