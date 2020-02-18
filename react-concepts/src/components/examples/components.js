import React from 'react';
import { UnableToUpdateComponents, AbleToUpdateComponents } from './update-components';
import ImportAndExport from './import-export';

const components = [
    {
        title: "Update Component",
        id: "v-pills-update-component",
        content: (
        <div>
            <h3>Update Component</h3>
            <UnableToUpdateComponents />
            <AbleToUpdateComponents />
        </div>
        )
    },
    {
        isSelected: true,
        title: "Import and Export",
        id: "v-pills-import-export",
        content: (
        <div>
            <ImportAndExport />
        </div>
        )
    }
];

export default components;