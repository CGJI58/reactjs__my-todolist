import { useRecoilValue } from "recoil";
import { cardSelector } from "../atoms";
import Card from "./Card";
import CreateCard from "./CreateCard";

function CardList() {
  const [todo, doing, done] = useRecoilValue(cardSelector);
  return (
    <>
      <CreateCard />
      <hr />
      <h1>To Do</h1>
      <ul>
        {todo.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
      <hr />
      <h1>Doing</h1>
      <ul>
        {doing.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
      <hr />
      <h1>Done</h1>
      <ul>
        {done.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </>
  );
}

export default CardList;
