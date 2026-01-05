import React from "react";
import "./TodoItem.css"

function TodoItem(props){
    const dueDate = props.dueDate;
    const isFinished = props.isFinished;
    const task = props.task;

    const date = dueDate.getDate();
    const month = dueDate.getMonth() + 1;
    const year = dueDate.getFullYear();
    return(
        <div className="form-control">
            <div className="cb-container">
                <input checked={isFinished} type="checkbox" />
            </div>
            <div className="tn-container">
                {task}
            </div>
            <div className="dd-container">
                {date}/{month}/{year}
            </div>
        </div>
    )
}

export default TodoItem;