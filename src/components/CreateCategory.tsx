import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { categoryListState } from "../atoms";

interface IForm {
    customCategory: string;
}

function CreateCategory() {
  const [categoryList, setCategoryList] = useRecoilState(categoryListState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ customCategory }: IForm) => {
    setCategoryList((oldCategoryLists) => [
      customCategory,
      ...oldCategoryLists,
    ]);
    setValue("customCategory", "");
  };

  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("customCategory", {
          required: "Please write a Category",
        })}
        placeholder="Write a Category"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCategory;