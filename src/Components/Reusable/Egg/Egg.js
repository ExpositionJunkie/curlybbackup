import React from "react";
import Title from "../Title/Title";
import { ReactComponent as PiedPiperIcon } from "../../../data/photos/frontend/icons/piedPiper.svg";
import "./Egg.css";
export default function Egg() {
  return (
    <div className="eggShell">
      <Title titleStr="Easter Egg" />
      <div className="innerShell pad1">
        <h1>Congratulations!</h1>
        <h1>You've found an easter egg!</h1>
        <div className="egg">
          <a
            className="plainLink"
            href="https://en.wikipedia.org/wiki/Silicon_Valley_(TV_series)"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <h2 className="eggHeader">Pied Piper</h2>
              <PiedPiperIcon className="piedPiper" />

              <p className="yolk">
                This website could not have been designed with Pied Piper becuase
                this is a fictional technology from the HBO series "Silicon
                Valley"
              </p>
            </div>
          </a>
        </div>

        <h2>Good eye! Thanks for taking the time to look around!</h2>
      </div>
    </div>
  );
}
