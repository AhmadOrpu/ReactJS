import { createContext, useContext } from "react";
import { useImmerReducer } from "use-immer";
import { initialTasks } from "../data/initialTasks";
import taskReducer from "../reducers/taskReducer";

let nextId = 4;

export const TasksContext = createContext(null);

export default function TaskProvider({ children }) {
  const [tasks, dispatch] = useImmerReducer(taskReducer, initialTasks);

  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      text,
      id: nextId++,
    });
  };

  const handleChangeTask = (task) => {
    dispatch({
      type: "changed",
      task,
    });
  };

  const handleDeleteTask = (taskId) => {
    dispatch({
      type: "deleted",
      taskId,
    });
  };
  return (
    <TasksContext.Provider
      value={{
        tasks,
        onAddTask: handleAddTask,
        onChangeTask: handleChangeTask,
        onDeleteTask: handleDeleteTask,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
}

export const useTask = () => {
  return useContext(TasksContext);
};
