import React from 'react';
import { UnableToUpdateComponents, AbleToUpdateComponents } from './update-components';


const components = [
    {
        isSelected: true,
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