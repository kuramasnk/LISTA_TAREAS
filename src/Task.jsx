import React from "react";

const Task = ({ task, deleteTask }) => {
  return (
    <li>
      {}
      {task.name}
      {}
      <button onClick={() => deleteTask(task.id)}>Eliminar</button>
    </li>
  );
};

export default Task;
