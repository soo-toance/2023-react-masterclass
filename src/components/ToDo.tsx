import { useSetRecoilState } from "recoil";
import { Categories, IToDo, toDoState } from "../atoms";

function ToDo({ text, category, id }: IToDo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (event:React.MouseEvent<HTMLButtonElement>) => {
    const {
        currentTarget : { name }
    } = event;

    setToDos((oldTodos) => {
        const targetIndex = oldTodos.findIndex(toDo => toDo.id === id);
        const oldTodo = oldTodos[targetIndex];
        const newTodo = {text, id, category: name as any};

        return [
            ...oldTodos.slice(0, targetIndex),
            newTodo,
            ...oldTodos.slice(targetIndex + 1),
        ];    
    })

  };

  return (
    <li>
      <span>{text}</span>
      {category !== Categories.DOING && <button name={Categories.DOING } onClick={onClick}>Doing</button>}
      {category !== Categories.TO_DO && <button name={Categories.TO_DO } onClick={onClick}>To do</button>}
      {category !== Categories.DONE && <button name={Categories.DONE } onClick={onClick}>Done</button>}
    </li>
  );
}

export default ToDo;