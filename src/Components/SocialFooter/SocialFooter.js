import React from "react";
import Line from "../Reusable/Line/Line";
//Icons from FontAwesome but not relying on their library
import { ReactComponent as GithubIcon } from "../../data/photos/frontend/icons/github.svg";
import { ReactComponent as LinkedInIcon } from "../../data/photos/frontend/icons/linkedIn.svg";
import { ReactComponent as TwitterIcon } from "../../data/photos/frontend/icons/twitterUncaged.svg";
import { ReactComponent as EnvelopeIcon } from "../../data/photos/frontend/icons/envelope.svg";

import "./SocialFooter.css";

//reading for when I add symbols: https://fontawesome.com/v6/docs/web/add-icons/svg-symbols

export default function SocialFooter(props) {
  return (
    <div className="footerWrapper">
      <div>
      <div className="lineDiv">
            <Line />
          </div>
          <h1 className="contact-header">Contact Information</h1>
        <span className="spanWrap marg4">
          <span className="contactWrap">
            <span className="contactLink">
              <a
                className="plainLink"
                href="mailto:rosalindavalbrecht@gmail.com?subject=I am interested in..."
              >
                <EnvelopeIcon />
                <div className="contactLabel">
                  <p>Email:</p>
                  <p>rosalindavalbrecht@gmail.com</p>
                </div>
              </a>
            </span>
            <span className="contactLink">
              <a
                className="plainLink"
                href="https://github.com/ExpositionJunkie"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon />
                <div className="contactLabel">
                  <p>Github:</p>
                  <p>github.com/ExpositionJunkie</p>
                </div>
              </a>
            </span>
            <span className="contactLink">
              <a
                className="plainLink"
                href="https://www.linkedin.com/in/rozalbrecht/"
                target="_blank"
                rel="noreferrer"
              >
                <LinkedInIcon />
                <div className="contactLabel">
                  <p>LinkedIn:</p>
                  <p>linkedin.com/in/rozalbrecht</p>
                </div>
              </a>
            </span>
            <span className="contactLink">
              <a
                className="plainLink"
                href="https://twitter.com/Zenith_zer"
                target="_blank"
                rel="noreferrer"
              >
                <TwitterIcon />
                <div className="contactLabel">
                  <p>Twitter:</p>
                  <p>twitter.com/Zenith_zer</p>
                </div>
              </a>
            </span>
          </span>
        </span>
      </div>
    </div>
  );
}
