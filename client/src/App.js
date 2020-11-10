import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import { Provider } from 'react-redux';
import store from "./store";

import './App.css';

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";
import WaitingLobby from "./components/layout/WaitingLobby";
import Footer from "./components/layout/Footer";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Play from "./components/quiz/Play";
import Summary from "./components/quiz/Summary";

// Check for token to keep user logged in
if(localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now()/1000;  // to get in milliseconds
  if(decoded.exp < currentTime) {
    // Logout User
    store.dispatch(logoutUser());

    // Redirect to Login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Route exact path="/" component={Landing} />
            <Route exact path="/Login" component={Login} />
            <Route exact path="/WaitingLobby" component={WaitingLobby} />
            <Switch>
              <PrivateRoute exact path="/Play" component={Play} />
              <PrivateRoute exact path="/Summary" component={Summary} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
