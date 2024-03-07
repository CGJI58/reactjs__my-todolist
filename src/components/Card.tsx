import { useSetRecoilState } from "recoil";
import { ICard, cardState } from "../atoms";

function Card({ text, category, id }: ICard) {
  const setCards = useSetRecoilState(cardState);
  const onClick = (newCategory: ICard["category"]) => {
    setCards((prevCards) => {
      const targetIndex = prevCards.findIndex((card) => card.id === id);
      const newCard = { text, id, category: newCategory };
      const newCards = [...prevCards];
      newCards.splice(targetIndex, 1, newCard);
      return newCards;
    });
  };
  return (
    <li>
      <span>{text}</span>
      {category !== "TODO" && (
        <button onClick={() => onClick("TODO")}>ToDo</button>
      )}
      {category !== "DOING" && (
        <button onClick={() => onClick("DOING")}>Doing</button>
      )}
      {category !== "DONE" && (
        <button onClick={() => onClick("DONE")}>Done</button>
      )}
    </li>
  );
}

export default Card;
