
import React, { useState } from "react";
import Task from "./Task"; 
import TaskForm from "./TaskForm"; 
import "./TaskList.css"; 

// Componente funcional TaskList
const TaskList = () => {
  // Estado para gestionar la lista de tareas
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea a la lista
  const addTask = (taskName) => {
    // Agrega una nueva tarea al estado utilizando el operador spread y actualiza el id
    setTasks([...tasks, { id: tasks.length + 1, name: taskName }]);
  };

  // Función para eliminar una tarea de la lista
  const deleteTask = (taskId) => {
    // Filtra las tareas y crea una nueva lista sin la tarea correspondiente al taskId
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    // Actualiza el estado con la nueva lista de tareas
    setTasks(updatedTasks);
  };

  // Renderiza el componente TaskList
  return (
    <div className="task-list-container">
      <h1 className="task-list-header">Lista de Tareas</h1>
      {/* Renderiza el componente TaskForm y pasa la función addTask como prop */}
      <TaskForm addTask={addTask} />
      {/* Renderiza la lista de tareas utilizando el componente Task y mapeando sobre el array de tareas */}
      <ul className="task-list">
        {tasks.map((task) => (
          <Task key={task.id} task={task} deleteTask={deleteTask} />
        ))}
      </ul>
    </div>
  );
};


export default TaskList;
