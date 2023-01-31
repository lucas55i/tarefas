import React, { useState } from "react";

import Tasks from "./components/Tasks";
import "./App.css";
import AddTask from "./components/AddTask";

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

  // Nova Task ao STATE
  const handleTaskAddtion = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle,
      id: Math.random(10),
      completed: false
    }]

    // Passando para o STATE a nova task criada
    setTasks(newTasks);
  } 

  return (
    <>
      <div className="container">
        {/* <!--Passado como props para receber o conteúdo do addTask--> */}
        <AddTask handleTaskAddtion={handleTaskAddtion}/>
        {/* Uso de props */}
        <Tasks tasks={tasks}/> 
      </div>
    </>
  );
};

export default App;
