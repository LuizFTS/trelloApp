// React Hooks
import { useState, useRef, useEffect } from "react";

const EditText = ({ children, handleChangeText }) => {
  const [text, setText] = useState(children);
  const [editing, setEditing] = useState(false);

  const textEditInput = useRef(null);

  useEffect(() => {
    if (editing) {
      textEditInput.current.focus();
    }
  }, [editing]);

  const handleSetTextKeyDown = (e) => {
    if (e.target.value === "" && e.key === "Enter") {
      setText(children);
    }
  };

  const handleBlur = (e) => {
    if (e.target.value !== "") {
      setText(e.target.value);
      setEditing(false);

      return;
    }
    setText(children);
    setEditing(false);
  };

  return (
    <div
      style={{ position: "relative" }}
      onBlur={(e) => {
        if (e.target.value === "") {
          return;
        }
        handleChangeText(e);
      }}
      onKeyDown={(e) => {
        if (e.target.value != "" && e.key === "Enter") {
          handleChangeText(e);
          e.target.blur();
        }
      }}
    >
      <h2
        onClick={() => setEditing(true)}
        style={!editing ? { visibility: "visible" } : { visibility: "hidden" }}
      >
        {text}
      </h2>
      <input
        type="text"
        value={text}
        ref={textEditInput}
        onKeyDown={(e) => handleSetTextKeyDown(e)}
        onChange={(e) => setText(e.target.value)}
        onBlur={(e) => handleBlur(e)}
        style={editing ? { visibility: "visible" } : { visibility: "hidden" }}
      />
    </div>
  );
};

export default EditText;
