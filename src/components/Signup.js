import React, { useState, useEffect } from "react";
import * as yup from "yup";
import { useHistory } from "react-router-dom";
import axiosWithAuth from "../utils/AxiosWithAuth";
import logo from "./img/mainlogo.png";
let SignUp = () => {
  let history = useHistory();
  const [signUpFormState, setSignUpFormState] = useState({
    username: "",
    password: "",
  });

  const [signUpErrors, setSignUpErrors] = useState({
    username: "",
    password: "",
    login: "Wrong username or password",
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const signUpFormSchema = yup.object().shape({
    username: yup.string().required("Username required"),
    password: yup.string().min(4).required("Password required"),
  });

  useEffect(() => {
    signUpFormSchema.isValid(signUpFormState).then((valid) => {
      setButtonDisabled(!valid);
    });
  }, [signUpFormState]);

  const inputChange = (e) => {
    e.persist();
    validateChange(e);
    setSignUpFormState({
      ...signUpFormState,
      [e.target.name]: e.target.value,
    });
  };
  const validateChange = (e) => {
    yup
      .reach(signUpFormSchema, e.target.name)
      .validate(e.target.value)
      .then((valid) => {
        setSignUpErrors({
          ...signUpErrors,
          [e.target.name]: "",
        });
      })
      .catch((err) => {
        setSignUpErrors({
          ...signUpErrors,
          [e.target.name]: err.errors[0],
        });
      });
  };
  const signupFormSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post(
        "https://arktracker.herokuapp.com/api/auth/register",
        signUpFormState
      )
      .then((res) => {
        history.push("/login");
        setSignUpFormState({
          username: "",
          password: "",
        });
      })
      .catch((err) => console.log(err.response));
  };
  return (
    <div className="signup-wrapper">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <div className="signupBox">
        <h1>Sign Up Page</h1>
        <form onSubmit={signupFormSubmit}>
          <label htmlFor="username">
            <input
              className="username-input"
              type="text"
              name="username"
              value={signUpFormState.username}
              onChange={inputChange}
              placeholder="username"
              id="username"
            />
            {signUpErrors.username.length > 0 ? (
              <p className="error">{signUpErrors.username}</p>
            ) : null}
          </label>
          <br></br>
          <div className="pwbuttonsep">
            <label htmlFor="password">
              <input
                className="password-input"
                type="password"
                name="password"
                value={signUpFormState.password}
                onChange={inputChange}
                id="password"
              />
              {signUpErrors.password.length > 0 ? (
                <p className="error">{signUpErrors.password}</p>
              ) : null}
            </label>
            <button className="login-btn" disabled={buttonDisabled}>
              Submit Registration
            </button>
          </div>
          <br></br>
          <a href="/login">Already have an account? Login Page</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
