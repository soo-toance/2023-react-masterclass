import { atom } from "recoil";

export const themeAtom = atom({
    key: "theme",
    default: "dark", 
})
export interface IToDo {
    text: string;
    id: number;
    category: "TO_DO" | "DOING" | "DONE";
  }
  
export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
});