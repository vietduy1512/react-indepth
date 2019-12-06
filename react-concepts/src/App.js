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
      <div class="row">
        <div class="col-3">
          <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <a class="nav-link active" data-toggle="pill" role="tab"
              href="#v-pills-hello-world"
            >
              1. Hello World
            </a>
            <a class="nav-link" data-toggle="pill" role="tab"
              href="#v-pills-introducing-jsx"
            >
              2. Introducing JSX
            </a>
            <a class="nav-link" data-toggle="pill" role="tab" 
              href="#v-pills-rendering-elements"
            >
              3. Rendering Elements
            </a>
            <a class="nav-link" data-toggle="pill" role="tab" 
              href="#v-pills-components-and-props"
            >
              4. Components And Props
            </a>
            <a class="nav-link" data-toggle="pill" role="tab" 
              href="#v-pills-state-and-lifecycle"
            >
              5. State And Lifecycle
            </a>
            <a class="nav-link" data-toggle="pill" role="tab" 
              href="#v-pills-handling-events"
            >
              6. Handling Events
            </a>
            <a class="nav-link" data-toggle="pill" role="tab" 
              href="#v-pills-examples"
            >
              Examples
            </a>
          </div>
        </div>
        <div class="col-9">
          <div class="tab-content" id="v-pills-tabContent">
            <div class="tab-pane fade show active" role="tabpanel"
              id="v-pills-hello-world"
            >
              <HelloWorldComponent />
            </div>
            <div class="tab-pane fade" role="tabpanel"
              id="v-pills-introducing-jsx"
            >
              <IntroducingJSX />
            </div>
            <div class="tab-pane fade" role="tabpanel"
              id="v-pills-rendering-elements"
            >
              <RenderingElements />
            </div>
            <div class="tab-pane fade" role="tabpanel"
              id="v-pills-components-and-props"
            >
              <ComponentsAndProps />
            </div>
            <div class="tab-pane fade" role="tabpanel"
              id="v-pills-state-and-lifecycle"
            >
              <StateAndLifecycle />
            </div>
            <div class="tab-pane fade" role="tabpanel"
              id="v-pills-handling-events"
            >
              <HandlingEvents />
            </div>
            <div class="tab-pane fade" role="tabpanel"
              id="v-pills-examples"
            >
              <div>
                <h3>Examples</h3>
                <UnableToUpdateComponents />
                <AbleToUpdateComponents />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
