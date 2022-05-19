import Line from "../Line/Line";
import DOMPurify from "dompurify";
import CommentFooter from "./CommentFooter";
import "./Comment.css";

export default function Comment({ blogId, comment, auth }) {
  const sanitizedData = () => ({
    __html: DOMPurify.sanitize(comment.text),
  });

  const date = new Date(comment.createdAt);

  if (comment) {
    return (
      <>
        <Line></Line>
        <div className="comment-body-wrap">
          <div
            className="comment-entry-body linkNoUnderline"
            dangerouslySetInnerHTML={sanitizedData()}
          />
        <div className="comment-author-details">
          <div className="comment-author">
            <p>Author: {comment.author.username}</p>
          </div>
          <p className="date"> - {date.toLocaleString()}</p>
          </div>
          <CommentFooter blogId={blogId} comment={comment} auth={auth}/>
        </div>
      </>
    );
  } else {
    return <></>;
  }
}
