import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../redux/slices/authSlice";
import { getTasks } from "../redux/slices/tasksSlice";

const TaskPage = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const handle = () => {
    dispatch(getTasks(token));
  };
  return (
    <div>
      <p>Task Page</p>
      <button type="button" onClick={handle}>Get Tasks</button>
    </div>
  );
};

export default TaskPage;
