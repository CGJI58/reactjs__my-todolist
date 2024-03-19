import styled from "styled-components";
import { DragDropContext, DropResult } from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import Board from "./components/Board";
import { boardsListState } from "./atoms";

const BoardsList = styled.div`
  width: 100%;
  height: minmax(400px, 100%);
  display: grid;
  grid-template-columns: repeat(auto-fit, 300px);
  gap: 10px;
  padding: 10px;
`;

function App() {
  const [boards, setBoards] = useRecoilState(boardsListState);
  const onDragEnd = ({ source, destination }: DropResult) => {
    if (!destination) return;

    if (destination.droppableId === source.droppableId) {
      setBoards((prev) => {
        const boardCopy = [...prev[source.droppableId]];
        const cardObj = boardCopy[source.index];
        boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, cardObj);
        return { ...prev, [source.droppableId]: boardCopy };
      });
    }

    if (destination.droppableId !== source.droppableId) {
      setBoards((prev) => {
        const sourceBoard = [...prev[source.droppableId]];
        const destinationBoard = [...prev[destination.droppableId]];
        const taskObj = sourceBoard[source.index];
        sourceBoard.splice(source.index, 1);
        destinationBoard.splice(destination.index, 0, taskObj);
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
