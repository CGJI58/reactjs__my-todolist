import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: black;
  width: 200px;
  height: 200px;
  margin: 10px 0;
`;

interface IBoardProps {
  boardId: string;
  cards: string[];
}

function Board({ boardId, cards }: IBoardProps) {
  return (
    <Droppable droppableId={boardId}>
      {(drop) => (
        <Wrapper ref={drop.innerRef} {...drop.droppableProps}>
          {cards.map((card, index) => (
            <Card key={card} index={index} text={card} />
          ))}
          {drop.placeholder}
        </Wrapper>
      )}
    </Droppable>
  );
}
export default Board;
