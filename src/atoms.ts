import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

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

export const categoryListState = atom<string[]>({
    key: "categoryList",
    default: [Categories.TO_DO, Categories.DOING, Categories.DONE]
})

export const categoryState = atom<Categories>({
    key: "category",
    default: Categories.TO_DO,
})

const { persistAtom } = recoilPersist({
    key: "todoLocal",
    storage: localStorage,
  });
  
export const toDoState = atom<IToDo[]>({
    key: "toDo",
    default: [],
    effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
    key: "toDoSelector",
    get: ({ get }) => {
      const toDos = get(toDoState);
      const category = get(categoryState);
      return toDos.filter((todo) => todo.category === category);
    },
  });