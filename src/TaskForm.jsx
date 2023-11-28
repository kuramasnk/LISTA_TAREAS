
import React, { useState } from "react";
import "./TaskForm.css"; 

// Componente funcional TaskForm que recibe la función addTask como prop
const TaskForm = ({ addTask }) => {
  // Estado para gestionar el nombre de la nueva tarea
  const [newTaskName, setNewTaskName] = useState("");

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Verifica si el nombre de la nueva tarea está en blanco y muestra una alerta
    if (newTaskName.trim() === "") {
      alert("Ingresar nueva tarea");
      return;
    }

    // Llama a la función addTask con el nombre de la nueva tarea y reinicia el estado
    addTask(newTaskName);
    setNewTaskName("");
  };

  // Renderiza el formulario con un input y un botón
  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="Tareas a realizar"
      />
      <button type="submit">Ingresar</button>
    </form>
  );
};

export default TaskForm;

