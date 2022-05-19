import React from "react";
import Comment from "./Comment";

function Comments({ blog, auth }) {


  if (blog.comments) {
    return (
      <div className="entry-wrapper">
        {blog.comments.map((comment) => {
          return (
            <div key={comment._id}>
              <Comment comment={comment} blogId={blog._id} auth={auth} />
            </div>
          );
        })}
      </div>
    );
  }
}


export default Comments;
