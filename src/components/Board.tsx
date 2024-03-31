import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";
import { useForm } from "react-hook-form";
import { ICard, boardsListState } from "../atoms";
import { useRecoilState } from "recoil";

const Wrapper = styled.div`
  border: 1px solid ${(props) => props.theme.accentColor};
  height: 300px;
`;
const BoardHead = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  border-bottom: 1px solid ${(props) => props.theme.accentColor};
`;

const Title = styled.h2`
  font-weight: bold;
`;

const DelBtn = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  cursor: pointer;
`;

interface IDropArea {
  draggingfromthiswith: string;
  isdraggingover: string;
}

const DropArea = styled.div<IDropArea>`
  display: flex;
  flex-direction: column;
  height: 250px;
  overflow-y: scroll;
  background-color: ${(props) =>
    props.isdraggingover === "true"
      ? "teal"
      : props.draggingfromthiswith === "true"
      ? "tomato"
      : "inherit"};
  transition: background-color 0.3s ease-in-out;
`;

interface IForm {
  task: string;
}

const Form = styled.form`
  width: 100%;
  input {
    width: 100%;
  }
`;

interface IBoardProps {
  boardId: string;
  cards: ICard[];
}

function Board({ boardId, cards }: IBoardProps) {
  const [boards, setBoards] = useRecoilState(boardsListState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = ({ task }: IForm) => {
    const newTask = {
      id: Date.now(),
      text: task,
    };
    setBoards((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newTask, ...allBoards[boardId]],
      };
    });
    setValue("task", "");
  };

  const deleteBoard = async () => {
    //내일하자씨발ㅋㅋ
    return;
  };

  return (
    <Wrapper>
      <BoardHead>
        <Title>{boardId}</Title>
        <DelBtn onClick={async () => await deleteBoard()}>❌</DelBtn>
      </BoardHead>
      <Form onSubmit={handleSubmit(onValid)}>
        <input
          {...register("task", { required: true })}
          type="text"
          placeholder={`Add task on ${boardId}`}
        />
      </Form>
      <Droppable droppableId={boardId}>
        {(drop, info) => (
          <DropArea
            draggingfromthiswith={info.draggingFromThisWith + ""}
            isdraggingover={info.isDraggingOver + ""}
            ref={drop.innerRef}
            {...drop.droppableProps}
          >
            {cards.map((card, index) => (
              <Card
                key={card.id}
                index={index}
                id={card.id}
                text={card.text}
                boardId={boardId}
              />
            ))}
            {drop.placeholder}
          </DropArea>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
