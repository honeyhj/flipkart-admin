import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './components/pages/homePage';
import SignUp from './components/pages/signUp';
import SignIn from './components/pages/signIn'
import Onno from './components/Onno';
import PrivateRoute from './components/hoc/PrivateRoute';


function App() {
  return (

    <Router>

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <PrivateRoute path="/onno" exact component={Onno} />
      </Switch>
    </Router>

  );
}

export default App;