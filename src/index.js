import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store/store';
 import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { isUserLoggedIn } from './redux/actions/authActions';
import { getCategories } from './redux/actions/categoryAction';



window.store = {store}


ReactDOM.render(
  
  <Provider store={store}>
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>
</Provider>
 ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
