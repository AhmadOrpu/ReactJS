import { useState } from "react";
import { useTask } from "../contexts/TasksContext";

export default function TaskContent({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const { onChangeTask } = useTask();

  return isEditing ? (
    <>
      <input
        type="text"
        value={task.text}
        onChange={(e) => onChangeTask({ ...task, text: e.target.value })}
      />
      <button onClick={() => setIsEditing(false)}>Save</button>
    </>
  ) : (
    <>
      <span>{task.text}</span>
      <button onClick={() => setIsEditing(true)}>Edit</button>
    </>
  );
}
