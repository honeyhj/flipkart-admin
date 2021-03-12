import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/pages/homePage';
import SignUp from './components/pages/signUp';
import SignIn from './components/pages/signIn'

function App() {
  return (

    <Router>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </Router>

  );
}

export default App;