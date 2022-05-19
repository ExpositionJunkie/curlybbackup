import React, { useState, useEffect } from "react";
import Title from "../../../Reusable/Title/Title";
import Line from "../../../Reusable/Line/Line";
import "./ISSLocator.css";

function ResponseInfo({ lat, long, alt, readyTrigger }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (readyTrigger) {
      setIsLoading(false);
    }
  }, [readyTrigger]);

  if (isLoading) {
    return <></>;
  } else {
    return (
      <div className="iss-response">
        <h2>ISS is orbiting here:</h2>
        <p>Latitude: {lat}</p>
        <p>Longitude: {long}</p>
        <p>Altitude: {alt}</p>
      </div>
    );
  }
}

export default function ISSLocator() {
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [issResponse, setIssResponse] = useState({
    response: "",
    readyTrigger: false,
  });

  useEffect(() => {
    if (submitTrigger) {
      const queryUrl = "https://api.wheretheiss.at/v1/satellites/25544";
      fetch(queryUrl)
        .then((res) => res.json())
        .then((response) => {
          JSON.stringify(response);
          setIssResponse({ response: response, readyTrigger: true });
        });
    }
  }, [submitTrigger]);

  const handleSubmit = (evt) => {
    setSubmitTrigger(true);
    if (!submitTrigger) {
      setSubmitTrigger(true);
    } else {
      setSubmitTrigger(false);
      setSubmitTrigger(true);
    }
    evt.preventDefault();
  };

  return (
    <>
      <div className="iss-wrapper">
        <Title titleStr="ISS Locator" />
        <div className="iss-inner-wrapper pad4">
          <h2>
            Shows the latitude, longitude and altitude of the ISS based on the
            moment the button is pressed
          </h2>
          <h3>
            Found{" "}
            <a
              href="https://api.wheretheiss.at/v1/satellites/25544"
              target="_blank"
              rel="noreferrer"
            >
              here
            </a>{" "}
            though I have not been able to find the documentation website so
            this will return the json response."
          </h3>
          <h2>Be sure to wave at your friendly neighborhood astronaut!</h2>

          <div className="inner_body">
            <span className="form_wrapper_center">
              <form
                onSubmit={(e) => {
                  handleSubmit(e);
                }}
              >
                <button type="submit" value="Submit" id="iss-submit">
                  Show Me the ISS!
                </button>
              </form>
            </span>
            <div className="marg3"></div>
            <Line></Line>
              <ResponseInfo
                lat={issResponse.response.latitude}
                long={issResponse.response.longitude}
                alt={issResponse.response.altitude}
                readyTrigger={issResponse.readyTrigger}
              />
              <div className="marg3"></div>
            <Line></Line>
          </div>
        </div>
      </div>
    </>
  );
}
