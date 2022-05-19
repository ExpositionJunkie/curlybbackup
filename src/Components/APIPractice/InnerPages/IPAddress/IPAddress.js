import React, { useState, useEffect } from "react";
import Title from "../../../Reusable/Title/Title";
import Line from "../../../Reusable/Line/Line";
import "./IPAddress.css";

function IPApiCall() {
  const [ip, setIp] = useState("");
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((response) => {
        JSON.stringify(response);
        setIp(response.ip);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  });

  if (error) {
    return <h3>{error.message}</h3>;
  } else {
    return <h1>{ip}</h1>;
  }
}

export default function IPAddress() {
  return (
    <div className="ip-wrapper">
      <Title titleStr="Your IP Address" />
      <div className="ip-inner-wrapper pad4">
        <h2>This is very simple. </h2>
        <h2>
          This page just fetches your current IP address from this{" "}
          <a
            href="https://api.ipify.org/?format=json"
            target="_blank"
            rel="noreferrer"
          >
            link
          </a>
          .
        </h2>
        <h3>
          (I know this feels a little like cheating, but I'll take an esay win
          today as I would like to enjoy the rest of my Friday night.)
        </h3>
        <div className="marg3"></div>
        <Line></Line>
        <div className="ip-result">
          <h3>Your IP address is currently:</h3>
          <IPApiCall />
        </div>
        <div className="marg3"></div>
        <Line></Line>
      </div>
    </div>
  );
}
