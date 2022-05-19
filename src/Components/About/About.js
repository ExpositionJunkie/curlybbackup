import React from "react";
import Title from "../Reusable/Title/Title";
import Line from "../Reusable/Line/Line";
import {NavLink} from "react-router-dom";
import SocialFooter from "../SocialFooter/SocialFooter"
import apolloGlamour from "../../data/photos/Apollo/ApolloGlamourShot.jpg";
import workshopRoz from "../../data/photos/Roz/profilePhotos/WorkshopRoz.jpg";

import "./About.css";

export default function About(props) {
  return (
    <div className="about-wrapper linkNoUnderline">
      <Title titleStr="About" />
      <div className="inner-about-wrapper">
        <div className="intro goals">
          <h1>Site Goals</h1>
          <h3>
            For most recent updates and snarky dev commentary, please check out
            my <NavLink to="/blog/devblog">Dev Blog</NavLink>.
          </h3>
          <p>Recently Completed</p>
          <ul>
            <li>Cookie policy/Google Analytics</li>
            <li>Blog Facelift</li>
            <li>More info on DND Spells</li>
            <li>NPM cleanup - 0 vulnerabilities on audit for front and back end! :D</li>
            <li>Blog Individual Rendering</li>
            <li>Working backend - SSL certs and all!</li>
            <li>Redux</li>
            <li>Login ability</li>
            <li>Blogging ability for users too as well as comments</li>
          </ul>
          <p>Near Future Attainables:</p>
          <ul>
            <li>Put/Delete Buttons</li>
            <li>Comments</li>
          </ul>
          <p>Further Future Attainables</p>
          <ul>
          <li>Favorites</li>
            <li>Friends</li>
            <li>
              RSS feed (This is waiting due to it being a better idea to do this programmatically than writing by hand)
            </li>
          </ul>
        </div>
     
      <Line></Line>
        <div className="about-body">
          <h2>
            For information regarding cookie usage, please refer to CB's <NavLink className="linkNoUnderline" to="/csp">Cookie Security Policy Documentation</NavLink>.
          </h2>
        </div>
        <Line></Line>
        <div className="headline">
          <h2>
            Curly Brackets is a blogging website programmed and
            designed by Roz Albrecht.
          </h2>
        </div>
        <div className="marg3"></div><Line></Line>
        <div className="intro">
        <h1 id="hiRoz">Hi, I'm Roz.</h1>
        <span id="topIntro" className="introSpan">
          <span className="introPic">
            <img
              id="netrunner"
              src={workshopRoz}
              alt="Roz in front of her workbench that features a painted galaxy design."
            />
          </span>
          <span className="introText">
            <h2 className="subtitle">
              I'm a fullstack MERN developer with a passion for skill
              collecting.
            </h2>
            <h2 className="subtitle">Like what you see? Need code?</h2>

            <h3 id="drop">
              <a
                className="plainLink"
                href="mailto:rosalindavalbrecht@gmail.com?subject=I am interested in giving you money to do a thing you like"
              >
                Drop me a line
              </a>
            </h3>
          </span>
        </span>
        <Line />
        <span id="hobbiesIntro" className="introSpan pad3">
          <span className="hobbies">
            <h3>
            Roz hopes to be adopted by a nerdy dev team who will respect
            audacity, tenacity, and video game references. She is housebroken
            and plays well with others.
            </h3>
            <h3>(Hire me!)</h3>
          </span>
          <span className="introPic">
            <img
              id="apollo"
              src={apolloGlamour}
              alt="Handsome border collie named Apollo squinches into the camera. He is a good boy. We currently enjoy a working relationship but he does not code very well."
            />
          </span>
        </span>
        </div>
        <div className="marg3"></div><Line></Line>
        <div className="about-body">
          <h3>To see some other things I've made, check out my <NavLink to="/apipractice">API practice pages</NavLink></h3>
        </div>
        <Line />
        <div className="stackWrap pad3">
          <div className="stack">
            <div>
              <span aria-hidden="true">S</span>
              <span aria-hidden="true">S</span>S
            </div>
            <div>
              <span aria-hidden="true">T</span>
              <span aria-hidden="true">T</span>T
            </div>
            <div>
              <span aria-hidden="true">A</span>
              <span aria-hidden="true">A</span>A
            </div>
            <div>
              <span aria-hidden="true">C</span>
              <span aria-hidden="true">C</span>C
            </div>
            <div>
              <span aria-hidden="true">K</span>
              <span aria-hidden="true">K</span>K
            </div>
          </div>
          <div className="stackList">
            <li className="sl">React</li>
            <li className="sl">React Native</li>
            <li className="sl">Mongo & Mongoose</li>
            <li className="sl">Express</li>
            <li className="sl">Node JS</li>
            <li className="sl">Responsive Design</li>
            <li className="sl">Rest API</li>
            <li className="sl">SCSS/SASS</li>
            <li className="sl">Bootstrap & MUI</li>
            <li className="sl">Figma (Wireframing)</li>
            <li className="sl">Requirements Gathering</li>
            <li className="sl">VBA</li>
          </div>
        </div>
      <h2 className="about-body">For contact info, see below:</h2>
      <SocialFooter></SocialFooter>
      </div>
    </div>
  );
}
