import React from 'react';
import InlineStyling from './1.inline-styling';
import AddingStylesheets from './2.adding-stylesheets';
import AddingCSSModules from './3.adding-css-modules';

const components = [
    {
        title: "1. Inline Styling",
        id: "v-pills-inline-styling",
        content: <InlineStyling/>
    },
    {
        title: "2. Adding Stylesheets",
        id: "v-pills-adding-stylesheets",
        content: <AddingStylesheets/>
    },
    {
        isSelected: true,
        title: "3. Adding CSS Modules",
        id: "v-pills-adding-css-modules",
        content: <AddingCSSModules/>
    }
];

export default components;