import React from 'react';
import InlineStyling from './1.inline-styling';
import AddingStylesheets from './2.adding-stylesheets';

const components = [
    {
        isSelected: true,
        title: "0. Inline Styling",
        id: "v-pills-inline-styling",
        content: <InlineStyling/>
    },
    {
        title: "1. Adding Stylesheets",
        id: "v-pills-adding-stylesheets",
        content: <AddingStylesheets/>
    }
];

export default components;