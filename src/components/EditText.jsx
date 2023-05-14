// React Hooks
import { useState, useRef, useEffect } from "react";

const EditText = (props) => {
  const [text, setText] = useState(props.children);
  const [editing, setEditing] = useState(false);

  const textEditInput = useRef(null);

  useEffect(() => {
    if (editing) {
      textEditInput.current.focus();
    }
  }, [editing]);

  return (
    <div style={{ position: "relative" }}>
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
        onChange={(e) => setText(e.target.value)}
        onBlur={() => setEditing(false)}
        style={editing ? { visibility: "visible" } : { visibility: "hidden" }}
      />
    </div>
  );
};

export default EditText;
