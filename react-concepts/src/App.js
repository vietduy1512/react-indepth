import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainConcepts from './components/main-concepts'
import Examples from './components/examples';
import StylesAndAssets from './components/styles-and-assets';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">React</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-item nav-link active" to="/">Home</Link>
            <Link className="nav-item nav-link" to="/main-concepts">Main Concepts</Link>
            <Link className="nav-item nav-link" to="/examples">Examples</Link>
            <Link className="nav-item nav-link" to="/styles-and-assets">Styles and Assets</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route exact path="/">
          <div>Home page</div>
        </Route>
        <Route path="/main-concepts">
          <MainConcepts />
        </Route>
        <Route path="/examples">
          <Examples />
        </Route>
        <Route path="/styles-and-assets">
          <StylesAndAssets />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
