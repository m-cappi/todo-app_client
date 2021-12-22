import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import TaskDelete from "./TaskDelete";
import TaskToggle from "./TaskToggle";

const TaskItem = ({ task }) => {
  const { taskId, summary, completed } = task;

  return (
    <div className={`todo-item ${completed ? "completed" : ""}`}>
      <span className={`description ${completed ? "completed" : ""}`}>
        {summary}
      </span>
      <TaskToggle taskId={taskId} completed={completed} />
      <TaskDelete taskId={taskId} />
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    taskId: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    description: PropTypes.string,
    createdAt: PropTypes.string,
    updatedAt: PropTypes.string
  }).isRequired
};

export default TaskItem;
