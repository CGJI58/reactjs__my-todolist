import { useRecoilValue } from "recoil";
import { cardSelector } from "../atoms";
import CreateCard from "./CreateCard";
import styled from "styled-components";
import Board from "./Board";

const Wrapper = styled.div``;

const Boards = styled.div``;

function BoardList() {
  const [todo, doing, done] = useRecoilValue(cardSelector);
  return (
    <Wrapper>
      <CreateCard />
      <Boards>
        <Board cards={todo} />
        <Board cards={doing} />
        <Board cards={done} />
      </Boards>
    </Wrapper>
  );
}

export default BoardList;
