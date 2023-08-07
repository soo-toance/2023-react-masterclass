import React, { useState } from "react";
import { useForm } from "react-hook-form"

// function ToDoList() {
//     const [ toDo, setTodo ] = useState("");
//     const [ toDoError, setToDoError ] = useState("");

//     const onChange = (event:React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: {value}
//         } = event;

//         setToDoError("");
//         setTodo(value);
//     };

//     const onSubmit = (event:React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         if (toDo.length < 10) {
//             return setToDoError("To do should be longer");
//         }

//         console.log('submit');
//     };

//     return <div>
//         <form onSubmit={onSubmit}>
//             <input onChange={onChange} placeholder="Write a to do" />
//             <button>Add</button>
//             {toDoError !== "" ? toDoError : null }
//         </form>
//     </div>;
// }


function ToDoList() {
    const { register, watch } = useForm();
    // console.log(watch) // 추적 가능 
    // console.log(register("toDo")); // name, onBlur, onChange 리턴 .. 

    return <div>
        <form>
            <input {...register("Email")} placeholder="Write a to do" />
            <button>Add</button>
        </form>
    </div>;
}

export default ToDoList;