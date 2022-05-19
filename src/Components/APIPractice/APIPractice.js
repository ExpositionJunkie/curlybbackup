import React from "react";
import Title from "../Reusable/Title/Title";
import { NavLink } from "react-router-dom";
import "./APIPractice.css";

export default function APIPractice() {

  return (
    <div className="apiWrapper">
      <Title titleStr="Api Practice List" />
      <div className="innerWrapper pad4">
        <div className="apiExplanation">

          <h3>List of various API practice pages aggregated here.</h3>
          <h4>
            If you want to see what got completed during what weeks, check out
            my update page or dev blog for an experience of the process
          </h4>
        </div>
        <ul className="linkNoUnderline">
          <li>
            <NavLink to="/nameguesser">Age Guesser</NavLink> (Complete
            2/15/2022)
          </li>
          <li>
            <NavLink to="/nasapower">NASA Power Albedo API </NavLink>(Complete
            2/17/2022)
          </li>
          <li>
            <NavLink to="/isslocator">ISS Locator</NavLink>(Complete 2/17/2022)
          </li>
          <li>
            <NavLink to="/dnd">DND Spells List Search</NavLink>(Complete
            2/18/2022)
          </li>
        </ul>
      </div>
    </div>
  );
}
