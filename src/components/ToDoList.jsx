import React, { useState } from "react";

function ToDoList() {

    const [tasks, setTask] = useState(["Eat Breakfast", "Lunch at 1pm", "Dinner at MoonLight"]);
    const [newTask, setNewTask] = useState("");

    function handleChangeInput(e){
        setNewTask(e.target.value);
        if (e.key === 'Enter'){
            addTask();
        }
        
    }
    function addTask() {        
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask]);
            setNewTask("");}
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }

    return (
        <div className="to-do-list">
            <h1>TO DO LIST</h1>

            <div className="input-area">
                <input type="text"
                    placeholder="Enter a task"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    onKeyDown={handleChangeInput} 
                    id="enter-task"/>
            
                <button 
                    className="add-button"
                    onClick={addTask}>
                    Add Task
                </button> 
            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span>
                            {task}
                        </span>
                        <button className="delete-button"
                        onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                                           
                    </li>
                )}
            </ol>


        </div>
    );
}

export default ToDoList;