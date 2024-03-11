import styled from "styled-components";
import {
  DragDropContext,
  Draggable,
  DropResult,
  Droppable,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import { cardState } from "./atoms";
import Card from "./components/Card";

const Wrapper = styled.div``;

const BoardsList = styled.div``;

const Board = styled.div``;

function App() {
  const [cards, setCards] = useRecoilState(cardState);

  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    if (!destination) return;
    setCards((prev) => {
      const prevCopy = [...prev];
      prevCopy.splice(source.index, 1);
      prevCopy.splice(destination.index, 0, draggableId);
      return prevCopy;
    });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <BoardsList>
          <Droppable droppableId="droppableOne">
            {(drop) => (
              <Board ref={drop.innerRef} {...drop.droppableProps}>
                {cards.map((card, index) => (
                  <Card key={card} text={card} index={index} />
                ))}
                {drop.placeholder}
              </Board>
            )}
          </Droppable>
        </BoardsList>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
