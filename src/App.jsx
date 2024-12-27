import React from "react";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./contexts/TasksContext";



const App = () => {


  return (
    <div>
      <h2>Our Simple To-Do App</h2>
      <TaskProvider>
        <AddTask />
        <TaskList />
      </TaskProvider>
    </div>
  );
};

export default App;
