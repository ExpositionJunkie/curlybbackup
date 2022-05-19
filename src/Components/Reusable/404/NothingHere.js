import { NavLink } from "react-router-dom";
import DannyDevito from "../../../data/photos/frontend/danny-devito.png"
import Title from "../Title/Title";
import "./NothingHere.css";

export default function NothinghHere() {
  return (
    <div className="blog-wrapper">
      <Title titleStr="404" />
      <div className="nothing-wrapper">
        <h1 className="nothing nothing-top">
          Oh dear, there appears to be nothing on this page.
        </h1>
        <h2 className="nothing egg-wrap">
          Can I offer you an
        </h2>
          <NavLink className="plainLink" to="/egg">
            <div className="egg shadow-box"><h1 className="eggHeader nothing-title">Egg</h1><img src={DannyDevito} alt="Danny Devito's glorious face" className="devito-head"></img></div>
          </NavLink><h2 className="nothing egg-wrap">{" "}
          in this trying time?
        </h2>
      </div>
    </div>
  );
}
