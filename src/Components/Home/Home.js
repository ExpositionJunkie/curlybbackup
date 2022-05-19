import React from "react";
import Title from "../Reusable/Title/Title";
import BlogList from "../Blog/BlogList";
import TagsSummary from "../Reusable/Tags/TagsSummary";
import { connect } from "react-redux";
import Line from "../Reusable/Line/Line";
import VariablePost from "../Reusable/Post/VariablePost";

import "./Home.css";

function HomePage({ auth, blogs }) {
  return (
    <div className="home-wrapper">
      <Title titleStr="Home" />
      <div className="inner-home-wrapper">
        <div>
        <div className="headline">
          <h1 className="home-title">Welcome to Curlybrackets.</h1>
          <h2 className="home-subtitle">Blog in Dark Mode</h2>
          <p>Write your magnum opus or "Hello World"</p>
        </div>
        
        <Line></Line>
        <div className="blog-columns-container">
          <div className="column tag-column">
            <TagsSummary blogs={blogs} className="tags-layout" />
          </div>
        <div className="column post-column">
        <VariablePost location={"home"} auth={auth} />
        
       
            <div className="plain-link">
              <BlogList auth={auth} blogs={blogs} />
            </div>

          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const Home = connect(null, null)(HomePage);

export default Home;
