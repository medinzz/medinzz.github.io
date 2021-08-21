import './App.css';
import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import LoginPage from './pages/Login'

class App extends React.Component {
  render() {
      return (
        <div className="App">
          <div>
            <nav>
              <ul id="navigation">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/login">Login</Link>
                </li>
              </ul>
            </nav>
          </div>
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <LoginPage />
            </Route>
          </Switch>
          </div>
            );
  }
}

export default App;