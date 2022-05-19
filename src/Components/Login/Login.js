import LoginForm from "../Login/LoginForm";
import Title from "../Reusable/Title/Title";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";
import { connect, useSelector, useDispatch } from "react-redux";

import "./Login.css";

function LoginPage() {
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  dispatch({ type: "logoutUser" });
  const { logoutUser } = bindActionCreators(ActionCreators, dispatch);
  let navigate = useNavigate();

  const handleLogout = () => {
    logoutUser()
      .then((res) => {})
      .then((res) => {
        navigate(1);
      });
  };

  if (auth.isAuthenticated) {
    return (
      <div className="login-wrapper">
        <Title titleStr="Logout" />
        <div className="login-form-inner-wrapper">
          <div className="login-form">
            <p>Hi choom, you are currently logged in!</p>
            <p>
              Have to go? We're sad to see you go, but we'll catch you on the
              async!
            </p>
            <button className="logout-button" onClick={() => handleLogout()}>
              Logout for now.
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="login-wrapper">
        <Title titleStr="Login" />
        <div className="login-form-inner-wrapper">
          <div className="login-form">
            <LoginForm />
            <div className="signup-call linkNoUnderline">
              <p>
                Don't have an account yet? No problem, choombatta, you can{" "}
                <NavLink to="/signup">signup here.</NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const Login = connect(null, null)(LoginPage);

export default Login;
