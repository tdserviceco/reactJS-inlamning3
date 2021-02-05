import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import Account from './pages/Account';
import Registration from './pages/Registration';
import NoMatch from './pages/NoMatch';

function App() {

  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/registration" />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </Router>
    </main>
  )
}

export default App;