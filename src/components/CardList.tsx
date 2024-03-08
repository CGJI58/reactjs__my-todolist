import { useRecoilValue } from "recoil";
import { cardSelector } from "../atoms";
import CreateCard from "./CreateCard";
import styled from "styled-components";
import Board from "./Board";

const Boards = styled.div`
  background-color: beige;
`;

function CardList() {
  const [todo, doing, done] = useRecoilValue(cardSelector);
  return (
    <>
      <CreateCard />
      <Boards>
        <Board cards={todo} />
        <Board cards={doing} />
        <Board cards={done} />
      </Boards>
    </>
  );
}

export default CardList;
