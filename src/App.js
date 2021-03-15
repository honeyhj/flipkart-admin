import React ,{useEffect}from 'react'
import {useDispatch,useSelector} from 'react-redux';
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
import { isUserLoggedIn } from './redux/actions/authActions';


function App() {
  const dispatch = useDispatch();
  const authenticate = useSelector(state => state.authenticate)


  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!authenticate) {
      dispatch(isUserLoggedIn());
    }

  }, [authenticate]);
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