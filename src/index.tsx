import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './pages/Login';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';


import './assets/vendor/bootstrap/bootstrap.min.css'

ReactDOM.render(
  <React.StrictMode>
  <HashRouter>
    <LoginPage />
  </HashRouter>
</React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
