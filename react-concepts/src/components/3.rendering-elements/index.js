import React from 'react';

function RenderingElements() {
  //// Code below updates ALL, which is not optimized as React
  // document.getElementById('root').innerHTML = `
  //   <span>Time: </span>
  //   <span>${new Date().toLocaleTimeString()}</span>
  // `;

  return (
    <div id="rendering-elements">
      <h2>Rendering Elements</h2>
      <span>Time: {new Date().toLocaleTimeString()}</span>  {/* React only updates What’s Changed */}
    </div>
  );
}

export default RenderingElements;
