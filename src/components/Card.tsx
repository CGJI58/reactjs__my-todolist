import { ICard } from "../atoms";

function Card({ text }: ICard) {
  return (
    <li>
      <span>{text}</span>
      <button>ToDo</button>
      <button>Doing</button>
      <button>Done</button>
    </li>
  );
}

export default Card;
