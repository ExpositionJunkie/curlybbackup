import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Line from "../Line/Line";
import AddComment from "./AddComment";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./CommentFooter.css";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";
import { connect, useDispatch, useSelector } from "react-redux";

function CommentF({ blogId, comment }) {
  const [editActive, setEditActive] = useState(false);
  const auth = useSelector((state) => state.auth);

  const handleEdit = (evt) => {
    evt.preventDefault();
    setEditActive(!editActive);
  };

  let editSymbol;
  if (auth.user) {
    if (auth.user.username === comment.author.username) {
      editSymbol = (
        <FontAwesomeIcon
          icon={solid("pen-to-square")}
          className="shadow-icon blog-footer-icon"
          onClick={(evt) => handleEdit(evt)}
        />
      );
    } else {
      editSymbol = <></>;
    }
  } else editSymbol = <></>;

  return (
    <div className="blog-footer-wrapper">
      <div className="blog-footer-icons">
        <DeleteAuth auth={auth} blogId={blogId} comment={comment} />
        {editSymbol}
      </div>
      <EditDrop
        auth={auth}
        blogId={blogId}
        editActive={editActive}
        comment={comment}
      />
    </div>
  );
}

function DeleteAuth({ auth, blogId, comment }) {
  const dispatch = useDispatch();
  dispatch({ type: "deleteComment" });

  const { deleteComment } = bindActionCreators(ActionCreators, dispatch);

  const navigate = useNavigate();
  const date = new Date(comment.createdAt);

  function deleteAlert(evt) {
    if (
      window.confirm(
        `Are you sure you want to delete this comment from ${date}?`
      )
    ) {
      handleDelete(evt);
    } else {
      evt.preventDefault();
    }
  }

  const handleDelete = (evt) => {
    deleteComment(blogId, comment._id)
      .then((res) => {})
      .then((res) => {
        navigate(0);
      });
  };

  if (auth.user) {
    if (auth.user.username === comment.author.username) {
      return (
        <FontAwesomeIcon
          onClick={(evt) => {
            deleteAlert(evt);
          }}
          icon={solid("trash")}
          className="shadow-icon blog-footer-icon"
        />
      );
    } else {
      return <></>;
    }
  } else {
    return <></>;
  }
}

function EditDrop({ auth, blogId, editActive, comment }) {

  if (editActive) {
    return (
      <div className="footer-drop">
        <Line></Line>
        <h1 className="edit-header">Edit Comment</h1>
        <AddComment auth={auth} blogId={blogId} comment={comment} content={comment.text}/>
      </div>
    );
  } else {
    return <></>;
  }
}

const CommentFooter = connect(null, null)(CommentF);

export default CommentFooter;
