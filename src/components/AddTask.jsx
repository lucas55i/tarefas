import React, { useState } from 'react';
import './AddTask.css'
import Button from './Button';

const AddTask = ({ handleTaskAddtion }) => {
    /* 
     Manipulação do State
     Linha 10-15
     Armazena o conteúdo digitado pelo usuário 
    */
    const [inputData, setInputData] = useState("");

    const handlerInputChange = (e) => {
        setInputData(e.target.value)
    }

    // Pega conteúdo do inputData e passa para o handleTaskAddition
    const handleAddTaskClick = () => {
        handleTaskAddtion(inputData)
    }

    return (
        <div className='add-task-container'>
            <input onChange={handlerInputChange} value={inputData} type="text" className='add-task-input' />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
    );
}

export default AddTask;