import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteTask } from "../redux/slices/tasksSlice";

const TaskDelete = ({ taskId }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTask(taskId));
  };

  return (
    <button type="button" className="trash-btn" onClick={handleDelete}>
      <i className="bi bi-trash icon" />
      <span>Borrar</span>
    </button>
  );
};

TaskDelete.propTypes = {
  taskId: PropTypes.number.isRequired
};

export default TaskDelete;
