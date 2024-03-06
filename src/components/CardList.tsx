import { useRecoilValue } from "recoil";
import { cardState } from "../atoms";
import Card from "./Card";
import CreateCard from "./CreateCard";

function CardList() {
  const Cards = useRecoilValue(cardState);
  return (
    <>
      <h1>Cards</h1>
      <hr />
      <CreateCard />
      <ul>
        {Cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </>
  );
}

export default CardList;
