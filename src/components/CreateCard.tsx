import { useSetRecoilState } from "recoil";
import { cardState } from "../atoms";
import { useForm } from "react-hook-form";

interface IForm {
  context: string;
}

function CreateCard() {
  const setCards = useSetRecoilState(cardState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ context }: IForm) => {
    setCards((prevCards) => [
      { text: context, id: Date.now(), category: "TODO" },
      ...prevCards,
    ]);
    setValue("context", "");
  };
  return (
    <form onSubmit={handleSubmit(handleValid)}>
      <input
        {...register("context", { required: "Please write context" })}
        placeholder="Write here"
      />
      <button>Add</button>
    </form>
  );
}

export default CreateCard;
