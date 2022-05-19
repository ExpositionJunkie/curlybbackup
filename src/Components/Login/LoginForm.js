import React, { useState } from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";
import { useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

function LoginFormOnly() {
  const [input, setInput] = useState({ email: "", username: "", password: "" });
  const [validationText, setValidationText] = useState("");
  //redux
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  dispatch({ type: "loginUser" });
  const { loginUser } = bindActionCreators(ActionCreators, dispatch);

  let navigate = useNavigate();

  const errMess = () => {
    setValidationText(auth.errMess);
  };

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: DOMPurify.sanitize(evt.target.value),
    }));
    evt.preventDefault();
  };

  const handleLogin = (evt) => {
    evt.preventDefault();
    loginUser(input)
      .then(() => {
        if (auth.errMess) {
          errMess();
        }
      })
      .then(() => {
        navigate(-1);
      });
  };

  return (
    <div className="login-form">
      <div>{validationText}</div>
      <form onSubmit={(evt) => handleLogin(evt)}>
        <span className="inner-form">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            required
            id="username"
            maxLength="320"
            autocComplete="username"
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
            autoComplete="current-password"
            placeholder="password"
            value={input.password}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="submit"
            name="submit"
            id="login-submit"
            value="Submit"
            className="login-submit shadow-icon"
          ></input>
        </span>
      </form>
    </div>
  );
}

const LoginForm = connect(null, null)(LoginFormOnly);

export default LoginForm;
