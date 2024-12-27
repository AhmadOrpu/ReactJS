import React, { useState } from "react";
import { useTask } from "../contexts/TasksContext";

const AddTask = () => {
  const [text, setText] = useState("");
  const { onAddTask } = useTask();
  return (
    <>
      <input
        type="text"
        placeholder="Add a Task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => {
          onAddTask(text);
          setText("");
        }}
      >
        Add
      </button>
    </>
  );
};

export default AddTask;
