import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import Board from "./components/Board";
import { boardsListState } from "./atoms";

const BoardsList = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function App() {
  const [boards, setBoards] = useRecoilState(boardsListState);
  const onDragEnd = ({ draggableId, source, destination }: DropResult) => {
    if (!destination) return;

    if (destination.droppableId === source.droppableId) {
      setBoards((prev) => {
        const boardCopy = [...prev[source.droppableId]];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, draggableId);
        return { ...prev, [source.droppableId]: boardCopy };
      });
    }

    if (destination.droppableId !== source.droppableId) {
      setBoards((prev) => {
        const sourceBoard = [...prev[source.droppableId]];
        const destinationBoard = [...prev[destination.droppableId]];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, draggableId);
        return {
          ...prev,
          [source.droppableId]: sourceBoard,
          [destination.droppableId]: destinationBoard,
        };
      });
    }
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
