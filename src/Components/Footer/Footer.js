import React from "react";
import Line from "../Reusable/Line/Line";
import { NavLink } from "react-router-dom";
//Icons from FontAwesome but not relying on their library
import { ReactComponent as ReactIcon } from "../../data/photos/frontend/icons/react.svg";
import { ReactComponent as PiedPiperIcon } from "../../data/photos/frontend/icons/piedPiper.svg";

import { ReactComponent as Css3 } from "../../data/photos/frontend/icons/css3.svg";
import { ReactComponent as JavascriptIcon } from "../../data/photos/frontend/icons/javascript.svg";
import { ReactComponent as SassIcon } from "../../data/photos/frontend/icons/sass.svg";

import { ReactComponent as Html5Icon } from "../../data/photos/frontend/icons/html5.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used

import "./Footer.css";

//reading for when I add symbols: https://fontawesome.com/v6/docs/web/add-icons/svg-symbols

export default function Footer(props) {
  return (
    <div className="footerWrapper">
      <div>
        <div className="lineDiv">
          <Line />
        </div>
        <span className="spanWrap marg4">
          <span className="contactWrap">
            <span className="contactLink shadow-icon linkNoUnderline">
              <NavLink to="csp">
                <FontAwesomeIcon icon={solid("cookie-bite")} />
                <div className="contactLabel">
                  <p>Cookie Policy</p>
                </div>
              </NavLink>
            </span>
            <span className="contactLink shadow-icon linkNoUnderline">
              <NavLink to="signup">
                <FontAwesomeIcon icon={solid("user-plus")} />
                <div className="contactLabel">
                  <p>Sign Up</p>
                </div>
              </NavLink>
            </span>
            <span className="contactLink shadow-icon linkNoUnderline">
              <NavLink to="login">
                <FontAwesomeIcon icon={solid("user-astronaut")} />
                <div className="contactLabel">
                  <p>Login</p>
                </div>
              </NavLink>
            </span>
            <span className="contactLink shadow-icon linkNoUnderline">
              <NavLink to="blog" >
                <FontAwesomeIcon icon={solid("blog")} />
                <div className="contactLabel">
                  <p>Blog</p>
                </div>
              </NavLink>
            </span>
            <span className="contactLink shadow-icon linkNoUnderline">
              <NavLink to="about" >
                <FontAwesomeIcon icon={solid("address-card")} />
                <div className="contactLabel">
                  <p>About</p>
                </div>
              </NavLink>
            </span>
          </span>
          <span className="techStack ">
            <div>
              <h2>Site brought to you by</h2>
              <div className="icons">
                <ReactIcon />
                <JavascriptIcon />
                <Html5Icon />
                <Css3 />
                <SassIcon />

                <NavLink to="/egg">
                  <PiedPiperIcon width="55px" height="55px" />
                </NavLink>
              </div>
            </div>
          </span>
        </span>

        <span>
          <div className="lineDiv">
            <Line />
          </div>
        </span>
      </div>
    </div>
  );
}
