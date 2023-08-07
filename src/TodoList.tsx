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

interface IForm {
    toDo: string;
}


function ToDoList() {
    const { register, watch, handleSubmit, formState } = useForm<IForm>({
        defaultValues: {
            toDo: "@naver.com"
        }
    });
    // console.log(watch) // 추적 가능 
    // console.log(register("toDo")); // name, onBlur, onChange 리턴 .. 
    // console.log(formState);

    const onValid = (data:IForm) => {
        console.log(data);
    };

    console.log(formState.errors);


    return <div>
        <form onSubmit={handleSubmit(onValid)}>
            <input {...register("toDo", { 
                required: 'ToDo is required', 
                pattern: {
                    value : /^[A-Za-z0-9._%+-]+@naver.com$/,
                    message: "Only naver.com emails allowed"
                },
                minLength: {value:10, message: "your Todo is too short"} 
            })} placeholder="Write a to do" />
            <button>Add</button>
        </form>
        <span>
            {formState.errors?.toDo?.message}
        </span>
    </div>;
}

export default ToDoList;