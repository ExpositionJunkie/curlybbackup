import React from "react";
import Line from "../Reusable/Line/Line";
import BlogEntry from "./BlogEntry";

import "./Blogs.css";

//this is used on the home page and as a standalone for routes - we pass in the param for the redirect to the blogentry
//since both use BlogEntry

//This component does not have the post included in it and is separate.

function BlogList({ auth, blogs, devblog }) {


  if (blogs.isLoading || blogs.errMess) {
    return <></>;
  } else if (!blogs.isLoading && !blogs.errMess) {
    if (blogs.blogs) {
      if (!devblog) {
        return (
          <div className="entry-wrapper">
            <div>
              {blogs.blogs.map((blogEntry) => {
                return (
                  <div key={blogEntry._id}>
                    <div className="entry shadow-box">
                      <BlogEntry blog={blogEntry} auth={auth} />
                    </div>
                    <div className="pad2">
                      <Line />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      } else {
        return (
          <div className="entry-wrapper">
            <div>
              <h1 className="devblog-heading">Devblog/Site Updates</h1>
              <h2 className="devblog-heading">Keeping it real.</h2>
              {blogs.devblogs.map((blogEntry) => {
                return (
                  <div key={blogEntry._id}>
                    <div className="entry shadow-box">
                      <BlogEntry blog={blogEntry} auth={auth} />
                    </div>
                    <div className="pad2">
                      <Line />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      }
    } else {
      return <></>
    }
  }
}



export default BlogList;
