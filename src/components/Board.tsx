import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.accentColor};
`;

const Title = styled.h2`
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
  padding: 5px;
  text-align: center;
  font-weight: bold;
`;

interface IDropArea {
  isDragDepart: boolean;
  isDragArrive: boolean;
}

const DropArea = styled.div<IDropArea>`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 200px;
  overflow: hidden;
  background-color: ${(props) =>
    props.isDragArrive
      ? "teal"
      : props.isDragDepart
      ? "tomato"
      : props.theme.bgColor};
  transition: background-color 0.3s ease-in-out;
`;

interface IBoardProps {
  boardId: string;
  cards: string[];
}

function Board({ boardId, cards }: IBoardProps) {
  return (
    <Wrapper>
      <Title>{boardId}</Title>
      <Droppable droppableId={boardId}>
        {(drop, info) => (
          <DropArea
            isDragDepart={Boolean(info.draggingFromThisWith)}
            isDragArrive={info.isDraggingOver}
            ref={drop.innerRef}
            {...drop.droppableProps}
          >
            {cards.map((card, index) => (
              <Card key={card} index={index} text={card} />
            ))}
            {drop.placeholder}
          </DropArea>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
