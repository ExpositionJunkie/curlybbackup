import React, { useState, useEffect } from "react";
import Title from "../../../Reusable/Title/Title";
import Line from "../../../Reusable/Line/Line";
import { countryList } from "../../../../data/CountryList";

import "./NameGuess.css";

function NameData({ input, submitTrigger }) {
  // this function takes the data from the form and returns it once a submit is triggered.
  const [apiResponse, setApiResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let url;
    if (submitTrigger && input.country && input.firstName) {
      if (input.country === "All") {
        url = `https://api.agify.io/?name=${input.firstName}`;
      } else {
        url = `https://api.agify.io/?name=${input.firstName}&country_id=${input.country}`;
      }
      fetch(url)
        .then((res) => res.json())
        .then(
          (result) => {
            if (result.count > 0) {
              setError(null);
              setApiResponse({ ...result });
              setApiResponse((prevState) => ({
                ...prevState,
                country: input.country,
              }));
              console.log(apiResponse);
              setIsLoaded(true);
            } else if (result.count === 0) {
              setError((prevState) => ({
                ...prevState,
                message: `No entries found - your name is one of a kind, ${input.firstName} at least in ${input.country}! I'm sure you look 10 years younger than you are, though. :)`,
              }));
              setIsLoaded(true);
            }
          },
          (error) => {
            setError((prevState) => ({ ...prevState, message: error.message }));
            console.log("Error coming from the API itself.");
          }
        );
    }
  }, [submitTrigger, input.firstName, input.country, apiResponse]);

  if (!isLoaded) {
    return <></>;
  } else if (error) {
    return (
      <>
        <h2>{error.message}</h2>
      </>
    );
  } else if (apiResponse) {
    return (
      <div className="name-guess-response">
        <h2>Name Queried: {apiResponse.name}</h2>
        <h2>Country Name: {apiResponse.country}</h2>
        <h2>Average age of people with your name: {apiResponse.age}</h2>
        <h2>Entries in this API: {apiResponse.count}</h2>
      </div>
    );
  }
}

export default function NameGuess() {
  const [input, setInput] = useState({ firstName: "John", country: "All" });
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [countries] = useState([...countryList]);

  const handleSubmit = (evt) => {
    setSubmitTrigger(true);
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    if (submitTrigger) {
      setSubmitTrigger(false);
    }
    evt.preventDefault();
  };

  return (
    <div className="name-guess-wrapper">
      <Title titleStr="Age Guesser" />
      <div className="name-guess-inner-wrapper pad3">
        <h2>
          The{" "}
          <a href="https://api.agify.io" target="_blank" rel="noreferrer">
            Agify API
          </a>{" "}
          guesses how old you are based on your name.
        </h2>
        <h2>See how old you look to a dataset!</h2>
        <p>
          Please note that this API has a somewhat small dataset it seems and
          developer is not responsible for inaccuracies in data.
        </p>
        <div className="form-wrapper-center pad1">
          <div>
            <form onSubmit={(e) => handleSubmit(e)}>
              <div>
                <div>
                  <div className="marg2">
                    <label htmlFor="firstName">Name: </label>
                  </div>
                  <div className="marg2">
                    <input
                      type="text"
                      id="firstName"
                      value={input.firstName}
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                </div>
              </div>
              <div className="marg2">
                <label htmlFor="country">Country: </label>
              </div>
              <div className="marg2">
                <select id="country" onChange={(e) => handleChange(e)}>
                  {countries.map((country) => {
                    return (
                      <option
                        key={country.code}
                        name={country.name}
                        id={country.name}
                        value={country.code}
                      >
                        {country.name}
                      </option>
                    );
                  })}
                </select>
              </div>
              <div className="marg2">
                <input type="submit" value="Submit" id="name-guess-submit" />
              </div>
            </form>
          </div>
          <div className="marg5"></div>
          <Line />
        </div>
        <NameData input={input} submitTrigger={submitTrigger} />

      </div>
    </div>
  );
}
