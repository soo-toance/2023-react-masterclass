import { IToDo } from "../atoms";

function ToDo({ text, category }: IToDo) {
  const onClick = (newCategory: IToDo["category"]) => {
    
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && <button onClick={() => onClick("DOING")}>Doing</button> }
      {category !== "TO_DO" && <button onClick={() => onClick("TO_DO")}>To do</button> }
      {category !== "DONE" && <button onClick={() => onClick("DONE")}>Done</button> }
    </li>
  );
}

export default ToDo;