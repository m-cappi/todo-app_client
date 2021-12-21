import React from "react";
import { useDispatch } from "react-redux";
import TaskAdd from "../components/TaskAdd";
import { removeToken } from "../helpers/localToken";
import { getTasks } from "../redux/slices/tasksSlice";

const TaskPage = () => {
  const dispatch = useDispatch();
  const handle = () => {
    dispatch(getTasks());
  };

  return (
    <div>
      <p>Task Page</p>
      <TaskAdd />
      <button type="button" onClick={handle}>
        Get Tasks
      </button>
      <button type="button" onClick={removeToken}>
        Remove Token
      </button>
    </div>
  );
};

export default TaskPage;
