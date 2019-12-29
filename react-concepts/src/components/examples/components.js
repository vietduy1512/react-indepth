import React from 'react';
import { UnableToUpdateComponents, AbleToUpdateComponents } from './update-components';

const components = [
    {
        isSelected: true,
        title: "Update Component",
        id: "v-pills-update-component",
        content: (
        <div>
            <h3>Update Component</h3>
            <UnableToUpdateComponents />
            <AbleToUpdateComponents />
        </div>
        )
    }
];

export default components;