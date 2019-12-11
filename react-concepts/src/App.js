import React from 'react';
import MainConcepts from './components/main-concepts'
import {
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/main-concepts">Main Concepts</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/">
          <div>Home page</div>
        </Route>
        <Route path="/main-concepts">
          <MainConcepts />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
