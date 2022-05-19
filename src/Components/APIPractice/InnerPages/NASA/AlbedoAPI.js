import React, { useState, useEffect } from "react";
import "./AlbedoAPI.css"

export default function AlbedoAPI({ queryStr, submitTrigger }) {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [apiData, setApiData] = useState({albedo: {}})

  useEffect(() => {
    if (submitTrigger && queryStr) {
      fetch(queryStr)
        .then((res) => res.json())
        .then((result) => {
          console.log(result.properties)
          setApiData((prevState) => ({...prevState, albedo: result.properties.parameter.ALLSKY_SRF_ALB}))
          setIsLoading(false);
        },(error) => {
          setError((prevState) => ({...prevState, message: error.message}));
          setIsLoading(false);
        })
    }

  }, [submitTrigger, queryStr])

  if (!isLoading) {
    if (error) {
      return (
        <div className="albedo_wrapper">{error.message}</div>
      )
    } else {
    return (
      <div className="albedo_wrapper">
        <h1>Albedo Readings</h1>
        {Object.keys(apiData.albedo).map((key, index) => {
          return (
            <div key={index}>{key}: {apiData.albedo[key]}</div>
          )
        })}
      </div>)}
  } else {
    return (
      <div className="albedo_wrapper">
        <h2>Waiting for Data</h2>
      </div>
    )
  }
}