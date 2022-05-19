import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { useEditor, EditorContent } from "@tiptap/react";
import Link from "@tiptap/extension-link";
import StarterKit from "@tiptap/starter-kit";
import EditorButtons from "../Post/EditorButtons";
import Image from "@tiptap/extension-image";
import DropCursor from "@tiptap/extension-dropcursor";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import DOMPurify from "dompurify";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";
import "../Post/Post.css";
import "./AddComment.css";

function CommentEditor({ auth, content, blogId, edit, comment }) {
  const [input, setInput] = useState({
    text: content || "",
  });

  const [validationText, setValidationText] = useState("");

  //redux dispatch
  const dispatch = useDispatch();
  dispatch({ type: "postComment" });
  dispatch({ type: "editComment" });
  const { postComment, editComment } = bindActionCreators(
    ActionCreators,
    dispatch
  );
  const comments = useSelector((state) => state.comments);

  const navigate = useNavigate();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        linkOnPaste: true,
        autolink: true,
      }),
      Image,
      DropCursor.configure({
        color: "#ff4d94"
      }),
      TextAlign,
      Highlight,
    ],
    type: "doc",
    content: DOMPurify.sanitize(input.text),
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      setInput((prevState) => ({
        ...prevState,
        text: DOMPurify.sanitize(html),
      }));
    },
    editorProps: {
      attributes: {
        class: 'prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto focus:outline-none',
      },
    },
  });

  const checkKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
    }
  };

  const errMess = () => {
    setValidationText(comments.errMess);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!edit) {
      postComment(input.text, blogId)
        .then(() => {
          if (comments.errMess) {
            errMess();
          }
        })
        .then(() => {
          if (!comments.errMess) {
            navigate(0);
          }
        });
    } else {
      editComment(input.text, blogId, comment._id)
        .then(() => {
          if (comments.errMess) {
            errMess();
          }
        })
        .then(() => {
          if (!comments.errMess) {
            navigate(0);
          }
        });
    }
  };

  if (auth.isAuthenticated) {
    return (
      <div className="post-wrapper">
        {validationText}
        <form
          autoComplete="off"
          onSubmit={(evt) => handleSubmit(evt)}
          onKeyDown={(e) => checkKeyDown(e)}
        >
          <EditorButtons editor={editor}></EditorButtons>
          <label htmlFor="text">Your two &#162;</label>
          <EditorContent className="editor" id="text" editor={editor} />

          <input
            type="submit"
            name="submit"
            value="Submit"
            className="submit-button"
          ></input>
        </form>
      </div>
    );
  } else {
    return (
      <div className="unverified-post">
        <h3 className="tagline">Want to start sharing your own thoughts?</h3>
        <h2>
          <div className="action-call-heading">
            <NavLink className="linkNoUnderline" to="/signup">
              Sign Up
            </NavLink>{" "}
            or{" "}
            <NavLink className="linkNoUnderline" to="/login">
              Log In
            </NavLink>
          </div>
        </h2>
      </div>
    );
  }
}

const AddComment = connect(null, null)(CommentEditor);

export default AddComment;
