import React, { useState } from 'react';

let isClick = false;

function UnableToUpdateComponents() {
  function handleClick(e) {
    console.log(isClick);
    if (!isClick) {
      isClick = true;
    }
  }

  if (isClick) {
    return <div>Clicked</div>;
  }
  
  return (
    <div>
      <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Unable to update this</button>
    </div>
  );
}

function AbleToUpdateComponents() {
  const [isClick, setIsClick] = useState(false);

  function handleClick(e) {
    console.log(isClick);
    if (!isClick) {
      setIsClick(true);   // Not using setState() will cause UI to NOT react to updates
    }
  }

  if (isClick) {
    return <div>Clicked</div>;
  }
  
  return (
    <div>
      <button type="button" className="btn btn-outline-primary" onClick={handleClick}>Able to update this</button>
    </div>
  );
}

export { UnableToUpdateComponents, AbleToUpdateComponents };