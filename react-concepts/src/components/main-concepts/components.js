import React from 'react';
import HelloWorldComponent from './1.hello-world/index';
import IntroducingJSX from './2.introducing-JSX';
import RenderingElements from './3.rendering-elements';
import ComponentsAndProps from './4.components-and-props';
import StateAndLifecycle from './5.state-and-lifecycle';
import HandlingEvents from './6.handling-events';
import ConditionalRendering from './7.conditional-rendering';
import { UnableToUpdateComponents, AbleToUpdateComponents } from './examples/update-components';
import ListsAndKeys from './8.lists-and-keys';
import Form from './9.forms';
import LiftingStateUp from './10.lifting-state-up';
import Composition from './11.composition-vs-inheritance';
import ThinkingInReact from './12.thinking-in-react';

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
        title: "4. Components and Props",
        id: "v-pills-components-and-props",
        content: <ComponentsAndProps />
    },
    {
        title: "5. State and Lifecycle",
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
        title: "8. Lists and Keys",
        id: "v-pills-lists-and-keys",
        content: <ListsAndKeys />
    },
    {
        title: "9. Forms",
        id: "v-pills-forms",
        content: <Form />
    },
    {
        title: "10. Lifting State Up",
        id: "v-pills-lifting-state-up",
        content: <LiftingStateUp />
    },
    {
        title: "11. Composition vs Inheritance",
        id: "v-pills-composition-vs-Inheritance",
        content: <Composition />
    },
    {
        isSelected: true,
        title: "12. Thinking in React",
        id: "v-pills-thinking-in-react",
        content: <ThinkingInReact />
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