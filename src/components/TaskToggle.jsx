import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { updateTask } from "../redux/slices/tasksSlice";

const TaskToggle = ({ taskId, completed }) => {
  const dispatch = useDispatch();

  const toggleComplete = () => {
    const payload = { completed: !completed };
    dispatch(updateTask({ taskId, payload }));
  };

  const icon = completed ? "bi bi-calendar-check-fill" : "bi bi-calendar";

  return (
    <button type="button" className="complete-btn" onClick={toggleComplete}>
      <i className={icon} />
      <span>Toggle</span>
    </button>
  );
};

TaskToggle.propTypes = {
  taskId: PropTypes.number.isRequired,
  completed: PropTypes.bool.isRequired
};

export default TaskToggle;
