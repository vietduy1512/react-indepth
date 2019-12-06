import React from 'react';
import HelloWorldComponent from './1.hello-world/index';
import IntroducingJSX from './2.introducing-JSX';
import RenderingElements from './3.rendering-elements';
import ComponentsAndProps from './4.components-and-props';
import StateAndLifecycle from './5.state-and-lifecycle';
import HandlingEvents from './6.handling-events';
import ConditionalRendering from './7.conditional-rendering';
import { UnableToUpdateComponents, AbleToUpdateComponents } from './examples/update-components';

const components = [
    {
        title: "1. Hello World",
        id: "v-pills-hello-world",
        content: <HelloWorldComponent />
    },
    {
        title: "2. Introducing JSX",
        id: "v-pills-introducing-jsx",
        content: <IntroducingJSX />
    },
    {
        title: "3. Rendering Elements",
        id: "v-pills-rendering-elements",
        content: <RenderingElements />
    },
    {
        title: "4. Components And Props",
        id: "v-pills-components-and-props",
        content: <ComponentsAndProps />
    },
    {
        title: "5. State And Lifecycle",
        id: "v-pills-state-and-lifecycle",
        content: <StateAndLifecycle />
    },
    {
        title: "6. Handling Events",
        id: "v-pills-handling-events",
        content: <HandlingEvents />
    },
    {
        title: "7. Conditional Rendering",
        id: "v-pills-conditional-rendering",
        content: <ConditionalRendering />
    },
    {
        title: "Examples",
        id: "v-pills-examples",
        content: (
        <div>
            <h3>Examples</h3>
            <UnableToUpdateComponents />
            <AbleToUpdateComponents />
        </div>
        )
    }
];

export default components;