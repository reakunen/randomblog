import React from "react";
import "./Task.css"
const Task = ({ task, toggleComplete, handleDelete }) => {
    const date = task.createdAt.toDate().toDateString()
    return (
    <div className="task">
        <h4 className='d'>{date}</h4>
      <h4
        style={{ textDecoration: task.completed && "line-through" }}
        onClick={() => toggleComplete(task)}
      >
        {task.title}
      </h4>
        <p>{task.content}</p>
      <button onClick={() => handleDelete(task.id)}>X</button>
    </div>
  );
};

export default Task;