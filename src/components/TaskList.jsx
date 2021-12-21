import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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

  useEffect(() => {
    dispatch(getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line no-nested-ternary
  return tasks.length > 0 ? (
    tasks.map((task) => <TaskItem task={task} key={task.taskId} />)
  ) : taskStatus === "loading" ? (
    <Spinner />
  ) : (
    <span>Empty</span>
  );
};

export default TaskList;
