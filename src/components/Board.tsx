import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Card from "./Card";
import { useForm } from "react-hook-form";
import { ICard, boardsListState } from "../atoms";
import { useSetRecoilState } from "recoil";

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

interface IForm {
  task: string;
}

const Form = styled.div`
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
  const setCards = useSetRecoilState(boardsListState);
  const { register, setValue, handleSubmit } = useForm<IForm>();

  const onValid = ({ task }: IForm) => {
    const newTask = {
      id: Date.now(),
      text: task,
    };

    setCards((allBoards) => {
      return {
        ...allBoards,
        [boardId]: [newTask, ...allBoards[boardId]],
      };
    });

    setValue("task", "");
  };

  return (
    <Wrapper>
      <Title>{boardId}</Title>
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
            isDragDepart={Boolean(info.draggingFromThisWith)}
            isDragArrive={info.isDraggingOver}
            ref={drop.innerRef}
            {...drop.droppableProps}
          >
            {cards.map((card, index) => (
              <Card key={card.id} index={index} id={card.id} text={card.text} />
            ))}
            {drop.placeholder}
          </DropArea>
        )}
      </Droppable>
    </Wrapper>
  );
}
export default Board;
