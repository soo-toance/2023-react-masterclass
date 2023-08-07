import React, { useState } from "react";

function ToDoList() {
    const [ toDo, setTodo ] = useState("");
    const [ toDoError, setToDoError ] = useState("");

    const onChange = (event:React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: {value}
        } = event;
        
        setToDoError("");
        setTodo(value);
    };

    const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (toDo.length < 10) {
            return setToDoError("To do should be longer");
        }

        console.log('submit');
    };

    return <div>
        <form onSubmit={onSubmit}>
            <input onChange={onChange} placeholder="Write a to do" />
            <button>Add</button>
            {toDoError !== "" ? toDoError : null }
        </form>
    </div>;
}

export default ToDoList;