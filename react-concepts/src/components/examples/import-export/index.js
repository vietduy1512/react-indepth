import React from 'react';
import * as Module from './export-default'
import ImportedExportDefault from './export-default'
import { ExportNamed, ExportNamed2, ExportNamed3 } from './export-named'

function ImportAndExport() {
  console.log(Module);
  console.log(ImportedExportDefault);
  console.log(ExportNamed);
  console.log(ExportNamed2);
  console.log(ExportNamed3);
  
  return (
    <div>
      <h2>Import And Export</h2>
      <p>(Check console.log)</p>
      <ImportedExportDefault/>
      <ExportNamed/>
    </div>
  );
}

export default ImportAndExport;