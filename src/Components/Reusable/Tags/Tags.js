import React from "react";
import TagsSummary from "./TagsSummary";
import { useParams } from "react-router-dom";
import BlogEntry from "../../Blog/BlogEntry";
import Line from "../Line/Line";

function Tags({ auth, blogs }) {
  let { tagname } = useParams();

  if (blogs.isLoading) {
    return <div>Loading...</div>;
  } else if (blogs.errMess) {
    return <div>{blogs.errMess}</div>;
  } else {
    let newblogs = blogs.blogs.filter((blog) =>{
      let tags = blog.tags.toString().toLowerCase()
      if (tags.includes(tagname)) {
        return blog;
      }
    })
    console.log(newblogs)
     return (
      <div className="entry-wrapper">
          {newblogs.map((blogEntry) => {
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
    );;
  }
}
export default Tags;
