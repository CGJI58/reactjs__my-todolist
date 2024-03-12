import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import Board from "./components/Board";
import { boardsListState } from "./atoms";

const BoardsList = styled.div``;

function App() {
  const [boards, setBoards] = useRecoilState(boardsListState);

  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    if (!destination) return;
    // setCards((prev) => {
    //   const prevCopy = [...prev];
    //   prevCopy.splice(source.index, 1);
    //   prevCopy.splice(destination.index, 0, draggableId);
    //   return prevCopy;
    // });
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <BoardsList>
        {Object.keys(boards).map((boardId) => (
          <Board key={boardId} boardId={boardId} cards={boards[boardId]} />
        ))}
      </BoardsList>
    </DragDropContext>
  );
}

export default App;
