import { useRecoilValue, useRecoilState } from "recoil";
import { Categories, categoryListState, categoryState, toDoSelector, toDoState } from "../atoms";
import CreateToDo from "./CreateToDo";
import CreateCategory from "./CreateCategory";
import ToDo from "./ToDo";

function ToDoList() {
    const toDos = useRecoilValue(toDoSelector);
    const [category, setCategory] = useRecoilState(categoryState);
    const [categoryList, setCategoryList] = useRecoilState(categoryListState);
    const onInput = (event:React.FormEvent<HTMLSelectElement>) => {
        setCategory(event.currentTarget.value as any);
    }

    return (
      <div>
        <h1>To Dos</h1>
        <hr />
        <div style={{display:'flex', flexDirection: 'row'}}>
            <select value={category} onInput={onInput}> 
                {categoryList?.map((aCategory) => (
                    <option value={aCategory}>{aCategory}</option>
                ))}
            </select>
            <CreateCategory />
        </div>
        <CreateToDo />
        {toDos?.map((toDo) => (
            <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  );
}
export default ToDoList;
