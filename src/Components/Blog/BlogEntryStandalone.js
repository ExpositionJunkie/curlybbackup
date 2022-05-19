import React, { useEffect, useState } from "react";
import Subtitle from "../Reusable/Subtitle/Subtitle";
import Line from "../Reusable/Line/Line";
import TagsSummary from "../Reusable/Tags/TagsSummary";
import { useParams, NavLink } from "react-router-dom";
import DOMPurify from "dompurify";
import BlogFooter from "./BlogFooter";

//redux

import { connect, useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../Redux/reduxIndex";

//https://overreacted.io/a-complete-guide-to-useeffect/
//https://www.robinwieruch.de/react-hooks-fetch-data/

export function BlogEntryS({ auth }) {
  const [tags, setTags] = useState([]);
  //dispatches for blogs
  const dispatch = useDispatch();
  //dispatches for blogs
  dispatch({ type: "fetchBlogs" });
  const blogs = useSelector((state) => state.blogs);

  const { fetchBlogs } = bindActionCreators(ActionCreators, dispatch);
  let { blogId } = useParams();
  let blog = blogs.blogs.find((blog) => blog._id === blogId);

  useEffect(() => {
    fetchBlogs();
    TagSplit();
  }, []);

  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(blog.text),
  });

  let date;

  if (blog) {
    date = new Date(blog.createdAt);
  }

  function TagSplit() {
    if (blog) {
      if (blog.tags) {
        console.log(blog.tags);
        let temp = blog.tags;
        let temp2 = temp.toString();
        let temp3 = temp2.toLowerCase();
        let temp4 = temp3.split(" ");

        setTags((prevState) => [...prevState, ...temp4]);
        console.log("tags", tags);
      }
    }
  }

  if (blog) {
    return (
        <div key={blogId} id="inner_entry_wrapper" className="inner-entry-wrapper standalone">
          <div className="column post-column"></div>
          <Subtitle
            titleStr={blog.title}
            subtitleStr={blog.subtitle}
          ></Subtitle>
          <Line />
          <span className="author-details">
            <div className="author">
              <h2>Author: {blog.author.username}</h2>
            </div>
            <p className="date"> - {date.toLocaleString()}</p>
          </span>
          <Line />
          <div className="blog-body-wrap">
            <div
              className="blog-entry-body linkNoUnderline"
              dangerouslySetInnerHTML={sanitizedData()}
            />
          </div>
          <div className="marg3">
            <Line></Line>
          </div>
          <div className="tags">
            <p>Tags: </p>
            {tags.map((tag, index) => {
              console.log(tag)
              return (
                <NavLink
                  className="link-wrap"
                  key={index}
                  to={`/blog/tags/${tag}`}
                >
                  <p className="tag">
                    {tag}
                  </p>
                </NavLink>
              );
            })}
          </div>
          <BlogFooter blog={blog} comments={true} auth={auth} />
      </div>
    );
  } else {
    return <></>;
  }
}

const BlogEntryStandalone = connect(null, null)(BlogEntryS);

export default BlogEntryStandalone;
