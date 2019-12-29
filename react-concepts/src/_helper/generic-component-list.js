import React from 'react';

function GenericComponentList(props) {
  return (
    <div className="row">
      <div className="col-3">
        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          {props.components.map(component => (
            <a className={"nav-link" + (component.isSelected ? " active" : "")} data-toggle="pill" role="tab"
              href={'#' + component.id} key={component.id}
            >
              {component.title}
            </a>
          ))}
        </div>
      </div>
      <div className="col-9">
        <div className="tab-content" id="v-pills-tabContent">
          {props.components.map(component => (
            <div className={"tab-pane fade" + (component.isSelected ? " show active" : "")} role="tabpanel"
              id={component.id} key={component.id}
            >
              {component.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default GenericComponentList;
