import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTasks, selectTasks } from "../redux/slices/tasksSlice";
import Spinner from "./Spinner";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const tasks = useSelector(selectTasks);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTasks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return tasks.length > 0 ? (
    tasks.map((task) => <TaskItem task={task} key={task.taskId} />)
  ) : (
    <Spinner />
  );
};

export default TaskList;
