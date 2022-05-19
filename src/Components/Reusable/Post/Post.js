import React, { useState } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Dropcursor from "@tiptap/extension-dropcursor";
import TextAlign from "@tiptap/extension-text-align";
import Highlight from "@tiptap/extension-highlight";
import EditorButtons from "./EditorButtons";

import DOMPurify from "dompurify";
import { connect, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { ActionCreators } from "../../../Redux/reduxIndex";
import { useNavigate } from "react-router-dom";
import "./Post.css";

function PostWrapper({ title, subtitle, tags, text, edit, blogId }) {
  const [input, setInput] = useState({
    title: title || "",
    subtitle: subtitle || "",
    text: text || "",
    tags: tags || "",
  });

  //redux dispatch
  const dispatch = useDispatch();
  dispatch({ type: "postBlog" });
  dispatch({ type: "editBlog" });
  const { postBlog, editBlog } = bindActionCreators(ActionCreators, dispatch);

  //for sending you to the blog after this posts
  let navigate = useNavigate();

  const editor = useEditor({
    extensions: [
      StarterKit,
      Link.configure({
        linkOnPaste: true,
        autolink: true,
      }),
      Image.configure({
        inline: true,
      }),
      Dropcursor.configure({
        color: "#ff4d94",
        width: 2,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph", "image"],
      }),
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
  });

  const handleChange = (evt) => {
    setInput((prevState) => ({
      ...prevState,
      [evt.target.id]: evt.target.value,
    }));
    evt.preventDefault();
  };

  const checkKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter") {
      e.preventDefault();
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!edit) {
      postBlog(input)
        .then((res) => {})
        .then((res) => {
          navigate(0);
        });
    } else {
      editBlog(input, blogId)
        .then((res) => {})
        .then((res) => {
          navigate(0);
        });
    }
  };

  return (
    <div className="post-wrapper">
      <form
        autoComplete="off"
        onSubmit={(evt) => handleSubmit(evt)}
        onKeyDown={(e) => checkKeyDown(e)}
      >
        <input
          type="text"
          id="title"
          className="post-title shadow-icon"
          placeholder="Title"
          value={input.title}
          onChange={(evt) => handleChange(evt)}
        ></input>
        <input
          type="text"
          id="subtitle"
          className="post-subtitle shadow-icon"
          placeholder="Subtitle"
          value={input.subtitle}
          onChange={(evt) => handleChange(evt)}
        ></input>
        <EditorContent
          autoFocus="end"
          className="editor shadow-icon"
          id="text"
          editor={editor}
        />
        <EditorButtons editor={editor}></EditorButtons>
        <input
          type="text"
          id="tags"
          className="post-subtitle shadow-icon"
          placeholder="tags separated by spaces"
          value={input.tags}
          onChange={(evt) => handleChange(evt)}
        ></input>
        <input
          type="submit"
          name="submit"
          value="Submit"
          className="submit-button shadow-icon"
        ></input>
      </form>
    </div>
  );
}

const Post = connect(null, null)(PostWrapper);

export default Post;
