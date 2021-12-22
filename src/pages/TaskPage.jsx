import React from "react";
import TaskAdd from "../components/TaskAdd";
import TaskList from "../components/TaskList";

const TaskPage = () => {
  return (
    <main>
      <TaskAdd />
      <TaskList />
    </main>
  );
};

export default TaskPage;
