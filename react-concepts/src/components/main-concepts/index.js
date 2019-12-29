import React from 'react';
import components from './components'
import GenericComponentList from '../../_helper/generic-component-list';

function MainConcepts() {
  return (
    <div>
      <GenericComponentList components={components}/>
    </div>
  );
}

export default MainConcepts;
