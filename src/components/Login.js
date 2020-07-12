import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAILURE } from "../actions/index";
import logo from "./img/mainlogo.png";

const initialState = {
  username: "",
  password: "",
  isFetching: false,
};

const Login = (props) => {
  const [inputValues, setInputValues] = useState(initialState);
  const [isFetching, setIsFetching] = useState(false);
  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    setIsFetching(true);
    e.preventDefault();
    delete inputValues.isFetching;
    axios
      .post("https://arktracker.herokuapp.com/api/auth/login", inputValues)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user_id", res.data.user_id);
        props.history.push("/dashboard");
      })
      .catch((err) => console.log("error logging in ", err));
  };

  return (
    <div>
      <div className="login-wrapper">
        <div className="logo">
          <img src={logo}></img>
        </div>
        <div className="loginBox">
          <h1 className="header">Log In to Access your Dinos and Items</h1>
          <form onSubmit={handleSubmit} className="loginForm">
            <div classname="usernamePassword">
              <input
                className="username-input"
                type="text"
                name="username"
                placeholder="Username"
                value={inputValues.username}
                onChange={handleChange}
              />
              <br></br>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={inputValues.password}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {inputValues.isFetching && "...Logging You In"}{" "}
          </form>

          <div className="link">
            <Link to="/signup">Click here to Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
