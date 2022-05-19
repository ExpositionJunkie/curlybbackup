import React, { useState, useEffect } from "react";
import Title from "../../../Reusable/Title/Title";
import Line from "../../../Reusable/Line/Line";

import "./DungeonsAndDragons.css";
//https://www.dnd5eapi.co/

const queryUrl = "https://www.dnd5eapi.co/api/spells/";

//TODO - write custom code to handle damage function and put in ability to click on components to get the spell card.

export function SpellContents({ spellQuery, submitTrigger }) {
  const [spellData, setSpellData] = useState({});
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (spellQuery && submitTrigger) {
      fetch("https://www.dnd5eapi.co" + spellQuery)
        .then((res) => res.json())
        .then((result, error) => {
          if (error) {
            setErr({ message: error.message });
          } else {
            console.log("Spell Contents Result", result);
            setSpellData((prevState) => ({ ...prevState, ...result }));
          }
        });
    }
  }, [spellQuery, submitTrigger]);

  if (spellData) {
    return (
      <div className="shadow-box marg2">
        <div className="pad4">
        <h1>Spell Name: {spellData.name}</h1>
        <h2>Casting Time:</h2> <p>{spellData.casting_time}</p>
        <h2>Range:</h2> <p>{spellData.range}</p>
        <h2>Duration:</h2> <p>{spellData.duration}</p>
        <h2>Description: </h2>
        <p>{spellData.desc}</p>
        <h2>Higher Level:</h2>
        <p>{spellData.higher_level}</p>
        <h2>Materials Required:</h2> <p>{spellData.material}</p>
        <h2>Level: </h2> <p>{spellData.level}</p>
        </div>
      </div>
    );
  } else if (err) {
    return <>{err.message}</>;
  } else {
    return <></>;
  }
}

export function SearchDandD({ filteredList, submitTrigger }) {
  if (filteredList.length > 0 && submitTrigger) {
    return (
      <div>
        <h2>Spell Search Results</h2>
        <h3>Matching Spells:</h3>
        {filteredList.map((spell) => {
          return (
            <div key={spell.index}>
              <SpellContents
                spellQuery={spell.url}
                submitTrigger={submitTrigger}
              />
            </div>
          );
        })}
      </div>
    );
  } else {
    return <h3>Enter Search Term to See Matching Spells</h3>;
  }
}

export function Spells({ searchTerm, submitTrigger }) {
  const [isLoading, setIsLoading] = useState(true);
  const [spells, setSpells] = useState({ spells: "" });
  const [filteredSpells, setFilteredSpells] = useState([]);

  useEffect(() => {
    if (!spells.spells) {
      fetch(queryUrl)
        .then((res) => res.json())
        .then((result) => {
          setSpells({ spells: result.results });
          setIsLoading(false);
        });
    }
    if (searchTerm && spells.spells && submitTrigger) {
      setFilteredSpells(
        spells.spells.filter((spell) => spell.index.includes(searchTerm.toLowerCase()))
      );
    }
  }, [searchTerm, spells.spells, submitTrigger]);

  

  if (isLoading) {
    return <p>...Loading</p>;
  } else {
    return (
      <div className="dnd-spells">
        <div className="marg3"><Line></Line></div>
        <h2>Matching Spells</h2>
        <SearchDandD
          filteredList={filteredSpells}
          submitTrigger={submitTrigger}
        />
        <div className="marg3"><Line></Line></div>
        <h2>All Spells</h2>
        {spells.spells.map((spell) => {
          return <p className="shadow-box marg4 pad2" key={spell.index}>{spell.name}</p>;
        })}
      </div>
    );
  }
}

export default function DungeonsAndDragons() {
  const [submitTrigger, setSubmitTrigger] = useState(false);
  const [input, setInput] = useState({ spellSearch: "" });

  const handleSubmit = (evt) => {
    setSubmitTrigger(!submitTrigger);
    evt.preventDefault();
  };

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    evt.preventDefault();
  };

  return (
    <div className="dnd-wrapper">
      <Title titleStr="D&D Spells" />
      <div className="inner-wrapper marg3">
        <div className="dnd-explanation">
          <h2>
            The API providing this as well as a wealth of D&D resources not
            shown here can be found at{" "}
            <a href="https://www.dnd5eapi.co/" target="_blank" rel="noreferrer">
              this link.
            </a>
          </h2>
          <h3>
            Once I have more time, I do intend on pulling in just aobut all of
            this data, simply becasue it is handy to have.
          </h3>
        </div>
        <div className="dnd-form-wrapper">
          <form className="dnd-search-form" onSubmit={(e) => handleSubmit(e)}>
            <label className="dnd-search-label" htmlFor="spellSearch">
              Search Spells
            </label>
            <input
              className="text-input"
              type="text"
              id="spellSearch"
              value={input.spellSearch}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <input className="button-dnd" type="submit" value="Submit" />
          </form>
        </div>
        <Spells searchTerm={input.spellSearch} submitTrigger={submitTrigger} />
      </div>
    </div>
  );
}
