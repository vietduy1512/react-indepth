import React from 'react';
import components from './components'

function App() {
  return (
    <div>
      <div className="row">
        <div className="col-3">
          <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            {components.map(component => (
              <a className="nav-link" data-toggle="pill" role="tab"
                href={'#' + component.id} key={component.id}
              >
                {component.title}
              </a>
            ))}
          </div>
        </div>
        <div className="col-9">
          <div className="tab-content" id="v-pills-tabContent">
            {components.map(component => (
              <div className="tab-pane fade" role="tabpanel"
                id={component.id} key={component.id}
              >
                {component.content}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
