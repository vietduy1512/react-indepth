import React from 'react';
import './dialog.css';

function FancyBorder(props) {
  return (
    <>
      <div>
        {props.title}
      </div>
      <div className={'FancyBorder FancyBorder-' + props.color}>
        
        {props.children}
      </div>
    </>
  );
}

function Dialog() {
  return (
    <FancyBorder color="blue"
      title={
        <h1 className="Dialog-title">
          Welcome dialog
        </h1>
      }
    >
      <h4 className="Dialog-title">
        Welcome
      </h4>
      <p className="Dialog-message">
        Thank you for visiting our spacecraft!
      </p>
    </FancyBorder>
  );
}

export default Dialog;