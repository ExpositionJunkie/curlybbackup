import React, { useState, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { solid } from "@fortawesome/fontawesome-svg-core/import.macro"; // <-- import styles to be used
import "./Post.css";

export default function EditorButtons({ editor }) {
  const [active, setActive] = useState(false);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor
      .chain()
      .focus()
      .extendMarkRange("link")
      .setLink({ href: url, target: "_blank" })
      .run();
  }, [editor]);

  if (!editor) {
    return null;
  }

  const handleClick = (evt) => {
    evt.preventDefault();
    setActive(!active);
  };

  const checkKeyDown = (e) => {
    if (e.code === "Enter" || e.code === "NumpadEnter" || e.code === "13") {
      e.preventDefault();
      setActive(!active);
    }
  };

  const addImage = () => {
    const url = window.prompt('URL')

    if (url) {
      editor.chain().focus().setImage({ src: url }).run()
    }
  }

  const EditorToggle = () => {
    return (
      <div
        entrykeyhint="enter"
        className={
          active
            ? "editor-toggle shadow-icon shadow-box"
            : "editor-toggle shadow-icon"
        }
        onClick={(evt) => {
          handleClick(evt);
        }}
        onKeyDown={(evt) => {
          checkKeyDown(evt);
        }}
        tabIndex="0"
      >
        <FontAwesomeIcon
          className="editor-toggle-icon"
          icon={solid("file-word")}
        />
        <p className="editor-toggle-text">Activate Rich Text Editor</p>
      </div>
    );
  };

  if (active) {
    return (
      <div className="editor-button-wrap">
        <EditorToggle />
        <div className="tooltip small-formatting-hide">
          <button
            type="button"
            onClick={() => editor.chain().focus().setParagraph().run()}
            className={
              editor.isActive("paragraph")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("paragraph")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Paragraph</span>
        </div>
        <div className="tooltip small-formatting-hide">
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 1 }).run()
            }
            className={
              editor.isActive("heading", { level: 1 })
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            H1
          </button>
          <span className="tooltip-text shadow-box-no-zoom ">Heading 1</span>
        </div>
        <div className="tooltip small-formatting-hide">
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 2 }).run()
            }
            className={
              editor.isActive("heading", { level: 2 })
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            H2
          </button>
          <span className="tooltip-text shadow-box-no-zoom small-formatting-hide">
            Heading 2
          </span>
        </div>

        <div className="tooltip small-formatting-hide">
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 3 }).run()
            }
            className={
              editor.isActive("heading", { level: 3 })
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            H3
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Heading 3</span>
        </div>

        <div className="tooltip small-formatting-hide">
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 4 }).run()
            }
            className={
              editor.isActive("heading", { level: 4 })
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            H4
          </button>
          <span className="tooltip-text shadow-box-no-zoom ">Heading 4</span>
        </div>

        <div className="tooltip small-formatting-hide">
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 5 }).run()
            }
            className={
              editor.isActive("heading", { level: 5 })
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            H5
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Heading 5</span>
        </div>

        <div className="tooltip small-formatting-hide">
          <button
            type="button"
            onClick={() =>
              editor.chain().focus().toggleHeading({ level: 6 }).run()
            }
            className={
              editor.isActive("heading", { level: 6 })
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            H6
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Heading 6</span>
        </div>
        <div className="tooltip">
          <button
            type="button"
            className="editor-button"
            onClick={() => editor.chain().focus().unsetAllMarks().run()}
          >
            <FontAwesomeIcon icon={solid("eraser")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">
            Remove Formatting
          </span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={
              editor.isActive("bold")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("bold")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Bold</span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={
              editor.isActive("italic")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("italic")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Italic</span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={
              editor.isActive("strike")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("strikethrough")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Strikethrough</span>
        </div>
        <div className="tooltip">
          <button
            type="button"
            onClick={setLink}
            className={
              editor.isActive("link")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("link")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">
            Add/Remove Link
          </span>
        </div>
        <div className="tooltip">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBulletList().run()}
            className={
              editor.isActive("bulletList")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("list")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">
            Bullet Point List
          </span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleOrderedList().run()}
            className={
              editor.isActive("orderedList")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("list-ol")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">
            Numbered/Ordered List
          </span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCodeBlock().run()}
            className={
              editor.isActive("codeBlock")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("file-code")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Code Block</span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleCode().run()}
            className={
              editor.isActive("code")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("code")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Code Snippet</span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            onClick={() => editor.chain().focus().toggleBlockquote().run()}
            className={
              editor.isActive("blockquote")
                ? "is-active editor-button"
                : "editor-button"
            }
          >
            <FontAwesomeIcon icon={solid("quote-left")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Blockquote</span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            className="editor-button"
            onClick={() => editor.chain().focus().setHorizontalRule().run()}
          >
            <FontAwesomeIcon icon={solid("ruler-horizontal")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">
            Horizontal Line
          </span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            className="editor-button"
            onClick={() => editor.chain().focus().setHardBreak().run()}
          >
            <FontAwesomeIcon icon={solid("arrow-down")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">New Line</span>
        </div>

        <div className="tooltip">
          <button
            type="button"
            className="editor-button"
            onClick={() => editor.chain().focus().undo().run()}
          >
            <FontAwesomeIcon icon={solid("rotate-left")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Undo</span>
        </div>
        <div className="tooltip">
          <button
            type="button"
            className="editor-button"
            onClick={() => editor.chain().focus().redo().run()}
          >
            <FontAwesomeIcon icon={solid("rotate-right")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Redo</span>
        </div>
        <div className="tooltip">
          <button
            type="button"
            className="editor-button"
            onClick={addImage}
          >
            <FontAwesomeIcon icon={solid("image")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Add Image From URL</span>
        </div>
        <div className="tooltip">
          <button
            type="button"
            className={editor.isActive({ textAlign: 'left' }) ? 'is-active editor-button' : 'editor-button'}
            onClick={() => editor.chain().focus().setTextAlign('left').run()} 
          >
            <FontAwesomeIcon icon={solid("align-left")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Align Left</span>
        </div>
        <div className="tooltip">
          <button
            type="button"
            className={editor.isActive({ textAlign: 'center' }) ? 'is-active editor-button' : 'editor-button'}
            onClick={() => editor.chain().focus().setTextAlign('center').run()} 
          >
            <FontAwesomeIcon icon={solid("align-center")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Align Center</span>
        </div>
        <div className="tooltip">
          <button
            type="button"
            className={editor.isActive({ textAlign: 'right' }) ? 'is-active editor-button' : 'editor-button'}
            onClick={() => editor.chain().focus().setTextAlign('right').run()} 
          >
            <FontAwesomeIcon icon={solid("align-right")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Align Right</span>
        </div>
        <div className="tooltip">
          <button
            type="button"
            className={editor.isActive({ highlight: true }) ? 'is-active editor-button' : 'editor-button'}
            onClick={() => editor.chain().focus().toggleHighlight().run()}
          >
            <FontAwesomeIcon icon={solid("highlighter")} />
          </button>
          <span className="tooltip-text shadow-box-no-zoom">Highlight</span>
        </div>
      </div>
    );
  } else {
    return <EditorToggle />;
  }
}
