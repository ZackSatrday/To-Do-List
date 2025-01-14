import React, { useState } from "react";

function ToDoList() {
    const [tasks, setTask] = useState([
        { task: "Eat Breakfast", priority: "Low" },
        { task: "Lunch at 1pm", priority: "Medium" },
        { task: "Dinner at MoonLight", priority: "High" }
    ]);
    const [newTask, setNewTask] = useState("");
    const [newPriority, setNewPriority] = useState("Low");

    function handleChangeInput(e) {
        setNewTask(e.target.value);
        if (e.key === 'Enter') {
            addTask();
        }
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, { task: newTask, priority: newPriority }]);
            setNewTask("");
            setNewPriority("Low");
        }
    }

    function deleteTask(index) {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTask(updatedTasks);
    }

    function sortTasks() {
        const priorityOrder = { "Low": 1, "Medium": 2, "High": 3 };
        return [...tasks].sort((a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]);
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
                    id="enter-task" />

                <select className="prior" value={newPriority} onChange={(e) => setNewPriority(e.target.value)}>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                </select>

                <button
                    className="add-button"
                    onClick={addTask}>
                    Add Task
                </button>
            </div>

            <ol>
                {sortTasks().map((taskObj, index) =>
                    <li key={index}>
                        <span>
                            {taskObj.task} - <strong>{taskObj.priority}</strong>
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
