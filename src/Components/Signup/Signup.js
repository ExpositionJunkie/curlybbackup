import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";
import { NavLink, useNavigate } from "react-router-dom";
import Title from "../Reusable/Title/Title";
import LoginForm from "../Login/LoginForm";
import DOMPurify from "dompurify";
import "./Signup.css";

function SignupWrap({signup}) {

  //redux actions
  const dispatch = useDispatch();
  dispatch({ type: "signupUser" });


  if (!signup.signupSuccess) {
    return (
      <div className="signup-wrapper">
        <Title titleStr="Sign Up"></Title>
        <div className="signup-form-inner-wrapper">
          <div className="signup-form">
            <h1 className="signup-tagline">
              Want to start your own blog or leave a comment? Sign Up to leave
              your mark between the curly brackets.
            </h1>
            <div className="signup-validation-text">{signup.errMess}</div>
            <div className="signup-validation-text">{signup.message}</div>
            <SignupForm></SignupForm>
            <p className="linkNoUnderline">Already have an account? <NavLink to="/login">Login here.</NavLink></p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="signup-wrapper">
        <Title titleStr="Login"></Title>
        <div className="signup-form-inner-wrapper">
          <div className="signup-form">
            <h1>Registration Successful!</h1>
            <h2>Login Below</h2>
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    );
  }
}

export function SignupForm({signup}) {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const [validationText, setValidationText] = useState("");
  //redux actions
  const dispatch = useDispatch();
  dispatch({ type: "signupUser" });
  const { signupUser } = bindActionCreators(ActionCreators, dispatch);

  let navigate = useNavigate();

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: DOMPurify.sanitize(evt.target.value),
    }));
    evt.preventDefault();
  };

  
  const errMess = () => {
    setValidationText(signup.errMess);
  };

  const handleSignup = (evt) => {
    evt.preventDefault()
    signupUser(input)
    .then((res) => {
      if (signup.errMess) {
        errMess();
      }
    })
    .then((res) => {
      navigate("/login");
    });
  };

  return (
    <form onSubmit={(evt) => handleSignup(evt)}>
      <div>{validationText}</div>
      <span className="inner-form">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          required
          maxLength="320"
          id="email"
          autoComplete="email"
          placeholder="email"
          value={input.email}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          required
          id="username"
          maxLength="320"
          autoComplete="username"
          placeholder="username"
          value={input.username}
          onChange={(e) => handleChange(e)}
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          minLength="8"
          maxLength="320"
          autocomplete="new-password"
          placeholder="password"
          value={input.password}
          onChange={(e) => handleChange(e)}
        />
        <input
          type="submit"
          name="submit"
          id="signup-submit"
          value="Submit"
          className="signup-submit"
        ></input>
      </span>
    </form>
  );
}


const Signup = connect(null, null)(SignupWrap);

export default Signup;
