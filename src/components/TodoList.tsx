import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { atom, useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

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

const toDoState = atom<ITodo[]>({
    key: "toDo",
    default: [],
});

interface IForm {
    toDo: string;
    extraError? : string; 
}

interface ITodo {
    text: string;
    id: number,
    category: "TO_DO" | "DOING" | "DONE";
}

function ToDoList() {
    const [toDos, setToDos] = useRecoilState(toDoState);
    // const value = useRecoilValue(toDoState);
    // const modFn = useSetRecoilState(toDoState);


    const { register, watch, handleSubmit, formState, setError, setValue } = useForm<IForm>({
    });
    console.log(watch) // 추적 가능 
    // console.log(register("toDo")); // name, onBlur, onChange 리턴 .. 
    // console.log(formState);

    const handleValid = (data:IForm) => {
       setToDos(oldToDos => [
            {
                text: data.toDo, 
                id: Date.now(),
                category: "TO_DO"
            }, ...oldToDos
        ]);
        setValue("toDo", "");
    };

    console.log(formState.errors);


    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <form onSubmit={handleSubmit(handleValid)}>
                <input {...register("toDo", { 
                    required: 'ToDo is required', 
                    validate: (value) => !value.includes('Nico'),
                })} placeholder="Write a to do" />
                <button>Add</button>
            </form>
            <span>
                {formState.errors?.toDo?.message}
            </span>
            <span>{formState.errors?.extraError?.message}</span>
            <ul>
                {toDos.map((toDo) => (
                <li key={toDo.id}>{toDo.text}</li>
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;