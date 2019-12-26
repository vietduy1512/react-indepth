import React from 'react';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainConcepts from './components/main-concepts'
import Examples from './components/examples';

function App() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link class="navbar-brand" to="/">React</Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link class="nav-item nav-link active" to="/">Home</Link>
            <Link class="nav-item nav-link" to="/main-concepts">Main Concepts</Link>
            <Link class="nav-item nav-link" to="/examples">Examples</Link>
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
      </Switch>
    </div>
  );
}

export default App;
