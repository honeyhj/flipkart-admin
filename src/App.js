import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomePage from './components/pages/homePage';

function App() {
  return ( 
  <div className = "App" >
      <Router>
          <Switch>
              <Route>
                  <HomePage></HomePage>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;