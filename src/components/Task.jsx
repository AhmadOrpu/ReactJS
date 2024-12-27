import React from "react";

import { useTask } from "../contexts/TasksContext";
import TaskContent from "./TaskContent";
const Task = ({ task }) => {
  const { onChangeTask, onDeleteTask } = useTask();
  return (
    <>
      <input
        type="checkbox"
        checked={task.isDone}
        onChange={(e) => onChangeTask({ ...task, isDone: e.target.checked })}
      />
      <TaskContent task={task} />

      <button onClick={() => onDeleteTask(task.id)}>Delete</button>
    </>
  );
};

export default Task;
