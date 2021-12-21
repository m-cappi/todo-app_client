import React from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

const TaskItem = ({ task }) => {
  return <div>Hola Mundo</div>;
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
