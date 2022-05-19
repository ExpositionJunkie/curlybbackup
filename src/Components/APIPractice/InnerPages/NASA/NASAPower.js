import React, { useState, useEffect } from "react";
import Title from "../../../Reusable/Title/Title";
import Line from "../../../Reusable/Line/Line";
import AlbedoAPI from "./AlbedoAPI";
import "./NASAPower.css";

var today = new Date();

export default function NASAPower() {
  const [input, setInput] = useState({
    startDate: "",
    endDate: "",
    latitude: "",
    longitude: "",
  });
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [albedoQuery, setAlbedoQuery] = useState("");

  useEffect(() => {
    //This sets the date values to the proper format to be read by query string on initialization in useEffect
    var scrubbedToday = `${today.getFullYear()}${
      today.getMonth() + 1
    }${today.getDate()}`;
    var scrubbedYesterday = `${today.getFullYear()}${today.getMonth() + 1}${
      today.getDate() - 1
    }`;
    //This should run only when the page is first open (empty brackets below)
    setInput({
      startDate: scrubbedYesterday,
      endDate: scrubbedToday,
      latitude: "47.6542",
      longitude: "122.3500",
    });
  }, []);

  const handleDateChange = (evt) => {
    let dateStr = evt.target.value.slice(0, 10).replace(/-/g, "");
    setInput((prevState) => ({ ...prevState, [evt.target.id]: dateStr }));
    console.log(
      "in handleDateChange: input",
      input,
      "evt.target.id",
      evt.target.id,
      "evt.target.value",
      evt.target.value
    );
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    console.log(
      "evt.target.id",
      evt.target.id,
      "evt.target.value",
      evt.target.value,
      "submitTrigger",
      submitTrigger
    );
    if (submitTrigger) {
      setSubmitTrigger(false);
    }
    evt.preventDefault();
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    var query =
      "https://power.larc.nasa.gov/api/temporal/hourly/point?start=" +
      input.startDate +
      "&end=" +
      input.endDate +
      "&latitude=" +
      input.latitude +
      "&longitude=" +
      input.longitude +
      "&community=ag&parameters=ALLSKY_SRF_ALB&header=true&time-standard=lst";
    setAlbedoQuery((prevState) => query);
    console.log("in handleSubmit query", query, "albedoQuery", albedoQuery);
    if (!submitTrigger) {
      setSubmitTrigger(true);
    } else {
      setSubmitTrigger(false);
      setSubmitTrigger(true);
    }
  };

  return (
    <div className="nasa-wrapper">
      <Title titleStr="NASA Power API" />
      <div className="nasa-inner-wrapper pad4">
        <h2>Albedo Readings by latitude and Longitude</h2>
        <h3>
          This provides select data for the{" "}
          <a
            href="https://power.larc.nasa.gov/api/pages/"
            target="_blank"
            rel="noreferrer"
          >
            NASA Power API
          </a>
          . Right now this specifically searches the Albedo or reflectivity
          readings of an area by lattitude and longitude.
        </h3>
        <h3>Default values:</h3>
        <h3>
          Start Date = Yesterday | End Date = Today | Latitude and Longitude are
          set to the Fremont neighborhood in Seattle, WA
        </h3>
        <p>
          (For the uninitiated, Fremont is suopposed to be the{" "}
          <a
            href="https://www.atlasobscura.com/places/center-of-the-universe-sign"
            target="_blank"
            rel="noreferrer"
          >
            center of the universe.
          </a>
          ){" "}
        </p>
        <p>
          Being in Seattle, it doesn't normally have very good readings, so if
          you see a lot of -999 that means it didn't get enough sun to record
          data. Will be changing this later, but for now, enjoy the local lore.
        </p>
        <div class="form_wrapper">
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="inner_form">
              <span>
                <label htmlFor="startDate">Start Date</label>
              </span>
              <span>
                <input
                  type="date"
                  id="startDate"
                  onChange={(e) => {
                    handleDateChange(e);
                  }}
                />
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="endDate">End Date</label>
              </span>
              <span>
                <input
                  type="date"
                  id="endDate"
                  onChange={(e) => {
                    handleDateChange(e);
                  }}
                />
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="latitude">Latitude</label>
              </span>
              <span>
                <input
                  type="text"
                  id="latitude"
                  value={input.latitude}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </span>
            </div>
            <div>
              <span>
                <label htmlFor="longitude">Longitude</label>
              </span>
              <span>
                <input
                  type="text"
                  id="longitude"
                  value={input.longitude}
                  onChange={(e) => {
                    handleChange(e);
                  }}
                />
              </span>
            </div>
            <div>
              <span>
                <input id="nasa-submit" type="submit" value="Submit" />
              </span>
            </div>
          </form>
        </div>
        <div className="marg3">
          <Line></Line>
        </div>
        <div className="nasa-response">
          <AlbedoAPI queryStr={albedoQuery} submitTrigger={submitTrigger} />
        </div>
        <div className="marg3">
          <Line></Line>
        </div>
      </div>
    </div>
  );
}
