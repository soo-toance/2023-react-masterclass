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
    extraError? : string; 
}


function ToDoList() {
    const { register, watch, handleSubmit, formState, setError } = useForm<IForm>({
        defaultValues: {
            toDo: "@naver.com"
        }
    });
    // console.log(watch) // 추적 가능 
    // console.log(register("toDo")); // name, onBlur, onChange 리턴 .. 
    // console.log(formState);

    const onValid = (data:IForm) => {
        console.log(data);
        // if (data.todo !== data.password1) {
        //     setError('todo', { message: 'password are not the same', shouldFocus: {true}});
        // }
        setError("extraError", {message: "server offline"});
    };

    console.log(formState.errors);


    return <div>
        <form onSubmit={handleSubmit(onValid)}>
            <input {...register("toDo", { 
                required: 'ToDo is required', 
                validate: (value) => !value.includes('Nico'),
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
        <span>{formState.errors?.extraError?.message}</span>
    </div>;
}

export default ToDoList;