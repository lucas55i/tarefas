import React, { useState } from "react";

import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";
import {v4 as uuidv4} from "uuid";

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Estudar  Programação",
      completed: false,
    },
    {
      id: "2",
      title: "Ler Livros",
      completed: true,               
    },
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      return task;
    })
    setTasks(newTasks)
  }

  // Nova Task ao STATE
  const handleTaskAddtion = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]
    // Passando para o STATE a nova task criada
    setTasks(newTasks);
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !==  taskId );
    setTasks(newTasks)
  }

  return (
    <>
      <div className="container">
        {/* <!--Passado como props para receber o conteúdo do addTask--> */}
        <AddTask handleTaskAddtion={handleTaskAddtion}/>
        {/* Uso de props */}
        <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/> 
      </div>
    </>
  );
};

export default App;
