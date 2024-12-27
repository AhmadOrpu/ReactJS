import React from "react";
import { useTask } from "../contexts/TasksContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useTask();

  return (
    <>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
