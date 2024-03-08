import styled from "styled-components";
import { ICard } from "../atoms";
import Card from "./Card";

interface IBoard {
  cards: ICard[];
}

const Wrapper = styled.div`
  background-color: teal;
  margin: 10px 0;
  padding: 0 10px;
`;

function Board({ cards }: IBoard) {
  return (
    <Wrapper>
      <h1>{cards[0]?.category}</h1>
      <ul>
        {cards.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </ul>
    </Wrapper>
  );
}

export default Board;
