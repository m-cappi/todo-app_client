import React from "react";
import TaskAdd from "../components/TaskAdd";
import TaskList from "../components/TaskList";
import { removeToken } from "../helpers/localToken";

const TaskPage = () => {
  return (
    <div>
      <p>Task Page</p>
      <TaskAdd />
      <button type="button" onClick={removeToken}>
        Remove Token
      </button>
      <TaskList />
    </div>
  );
};

export default TaskPage;
