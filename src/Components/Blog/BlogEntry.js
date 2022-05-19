import React, {useState, useEffect} from "react";
import {NavLink} from "react-router-dom"
import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";
import DOMPurify from "dompurify";
import BlogFooter from "./BlogFooter"

// this component is for rendering the inner entries when blogs are listed out
export default function BlogEntry({ blog, auth }) {
  const [tags, setTags] = useState([])
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(blog.text),
  });

  const date = new Date(blog.createdAt);

  useEffect(() => {
    TagSplit()
  }, [blog]);

  function TagSplit() {
    if (blog) {
      if (blog.tags) {
        console.log(blog.tags)
        let temp = blog.tags
        let temp2 = temp.toString()
        let temp3 = temp2.toLowerCase()
        let temp4 = temp3.split(" ")
        console.log(temp4)
        setTags((prevState) =>([...prevState, ...temp4]) )
        console.log("tags", tags)
      }
    }
  }


  if (blog) {
    return (
      <div id="inner_entry_wrapper" className="inner-entry-wrapper">
        <NavLink className="link-wrap" to={`/blog/${blog._id}`}>
        <Subtitle titleStr={blog.title} subtitleStr={blog.subtitle}></Subtitle>
        <Line></Line>
        <div className="author-details">
          <div className="author">
            <h2>Author: {blog.author.username}</h2>
          </div>
          <p className="date"> - {date.toLocaleString()}</p>
        </div>
        <Line></Line>
        <div className="blog-body-wrap">
        <div
          className="blog-entry-body linkNoUnderline"
          dangerouslySetInnerHTML={sanitizedData()}
        />
        </div>
        <div className="marg3">
          <Line></Line>
        </div>
        </NavLink>
        <div className="tags">
        

            <p>Tags:</p>
        

          {tags.map((tag, index) => {
            return (
              <NavLink className="link-wrap" key={index} to={`/blog/tags/${tag}`}>
              <p className="tag" key={index}>
                {tag}
              </p>
              </NavLink>
            );
          })}
        </div>
        
        <BlogFooter blog={blog} comments={false} auth={auth} />
      </div>
    );
  } else {
    return <></>
  }
}
