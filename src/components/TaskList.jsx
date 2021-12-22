/* eslint-disable no-nested-ternary */
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../redux/slices/authSlice";
import {
  getTasks,
  selectTasks,
  selectTaskStatus
} from "../redux/slices/tasksSlice";
import Spinner from "./Spinner";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const taskStatus = useSelector(selectTaskStatus);
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  useEffect(() => {
    dispatch(getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  return (
    <div className="todo-container">
      {tasks.length > 0 ? (
        <div className="todo-list">
          {tasks.map((task) => (
            <TaskItem task={task} key={task.taskId} />
          ))}
        </div>
      ) : taskStatus === "loading" ? (
        <Spinner />
      ) : (
        <span>Empty</span>
      )}
    </div>
  );
};

export default TaskList;
