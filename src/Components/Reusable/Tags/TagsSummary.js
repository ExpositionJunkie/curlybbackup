import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./TagsSummary.css";

export default function TagsSummary({ blogs }) {
  const [tags, setTags] = useState([]);
  let reduceArr;

  useEffect(() => {
    settingTags(blogs);
    return function () {
      //closeout
      setTags([]);
    };
  }, [blogs]);

  const settingTags = (blog) => {
    let arr = [];
    let tagArr = [];

    if (blog.blogs) {
      //this very ugly function flattens out the results from each blog into one big array so we can sort it later and note frequency
      arr.push(
        blog.blogs.map((blog) => {
          return blog.tags;
        })
      );
      let newArr = arr
        .flat(2)
        .map((tag) => {
          let newTag = tag.toString().toLowerCase()
          let newTags = [newTag.split(" ")];
          return newTags;
        })
        .flat(3);
      for (let i = 0; i < newArr.length; i++) {
        let tempTag = { tag: newArr[i]};
        tagArr.push(tempTag);
      }
      //compiles tags into an object that lists frequency
      reduceArr = tagArr.reduce((x, y) => {
        if (x[y.tag]) {
          x[y.tag]++;
          return x;
        } else {
          var z = {};
          z[y.tag] = 1;
          return Object.assign(x, z);
        }
      }, {});
      //sorts entries by frequency
      let sorted = Object.fromEntries(
        Object.entries(reduceArr).sort(([, a], [, b]) => b - a)
      );
      //puts them into the tag object
      Object.keys(sorted).map(function (key, index) {
        console.log(key, sorted[key]);
        let lowercase = key.toLowerCase()
        setTags((prevState) => [
          ...prevState,
          { tag: lowercase, count: sorted[key] },
        ]);
      });
    }
  };

  if (tags) {
    return (
      <div className="tags-summary">
        <div>
          <div className="tags-header">
            <h2 className="tags-header-text">What's the word?</h2>
            <p className="tags-header-text">We have to say the most about...</p>
            </div>
          <span className="tag-summary-span plainLink">
            {tags.map((tag, index) => {
              console.log("tag", tag);
              return (
                <NavLink className="plainLink" key={index} to={`/blog/tags/${tag.tag}`}>
                  <div className="shadow-icon tags tag-bubble" loading="lazy">{tag.tag}</div>
                </NavLink>
              );
            })}
          </span>
          </div>
        <div className="summary-border"></div>
     
      </div>
    );
  } else {
    return <></>;
  }
}
