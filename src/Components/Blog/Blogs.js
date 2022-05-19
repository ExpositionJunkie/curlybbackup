import React from "react";
import Title from "../Reusable/Title/Title";
import TagsSummary from "../Reusable/Tags/TagsSummary";
import { Outlet } from "react-router-dom";
import "./Blogs.css";

export default function Blog({blogs}) {
  return (
    <div className="blog-wrapper">
      <Title titleStr="Blog" />
      <div>

      <div className="blog-columns-container">
          <div className="tag-column">
            <TagsSummary blogs={blogs} className="tags-layout" />
          </div>
          <div className="post-column">
          <Outlet />
        </div>
        </div>
      </div>
    </div>
  );
}
