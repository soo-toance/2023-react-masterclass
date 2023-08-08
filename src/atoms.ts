import { atom, selector } from "recoil";

export const themeAtom = atom({
    key: "theme",
    default: "dark", 
})

export enum Categories {
    "TO_DO" = "TO_DO",
    "DOING" = "DOING",
    "DONE" = "DONE",
  }

export interface IToDo {
    text: string;
    id: number;
    category: Categories;
  }

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
})
  
export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
      const toDos = get(toDoState);
      const category = get(categoryState);
      if (category == "TO_DO") return toDos.filter((todo) => todo.category === "TO_DO");
      if (category == "DOING") return toDos.filter((todo) => todo.category === "DOING");
      if (category == "DONE") return toDos.filter((todo) => todo.category === "DONE");
    },
  });