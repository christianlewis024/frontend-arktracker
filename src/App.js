import React from "react";

import "./App.css";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import { Switch, Route, Redirect } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact path="/" to="/signup" />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={SignUp} />

        <PrivateRoute path="/dashboard" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
