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
import Category from './components/pages/category'
import { getCategories } from './redux/actions/categoryAction';
console.log('app')

function App() {
  const dispatch = useDispatch();
  const authenticate = useSelector(state => state.user.authenticate)

  //componentDidMount or componentDidUpdate
  useEffect(() => {
    if (!authenticate) {
      dispatch(isUserLoggedIn());
    }
    if(authenticate){
      dispatch(getCategories())
    }
    
  }, [authenticate]);


  return (

   

      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/signin" exact component={SignIn} />
        <PrivateRoute path="/onno" exact component={Onno} />
        <PrivateRoute path="/category" exact component={Category} />
      </Switch>
   

  );
}

export default App;