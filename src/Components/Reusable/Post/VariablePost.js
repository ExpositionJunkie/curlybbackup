import Post from "./Post";
import { NavLink } from "react-router-dom";
import "./VariablePost.css";

function VariablePost({ location, content, auth}) {
  

  if (auth.isAuthenticated) {
    if (localStorage.getItem("blog")) {
      let blog=JSON.parse(localStorage.getItem("blog"))
      return <Post location={location} content={content} title={blog.title} tags={blog.tags} text={blog.text} subtitle={blog.subtitle}/>;
    } else {
      return <Post location={location} content={content} />;
    }
  } else {
    return (
      <div className="unverified-post">
        <h3 className="tagline">Want to start sharing your own thoughts?</h3>
        <h2 className="linkNoUnderline">
          <NavLink to="/signup">Signup</NavLink> or {" "}
          <NavLink to="/login">Login</NavLink> to join the conversation.
        </h2>
      </div>
    );
  }
}


export default VariablePost;
