import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ICard } from "../atoms";

const Wrapper = styled.div<{ isDragging: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => (props.isDragging ? "skyblue" : "darkblue")};
  margin: 5px 0;
  padding: 5px;
`;

const Handle = styled.div`
  width: 30px;
`;

const TextBox = styled.div`
  display: flex;
`;

const DelBtn = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  cursor: pointer;
`;

interface ICardProps extends ICard {
  index: number;
}

function Card({ id, text, index }: ICardProps) {
  const deleteCard = () => {
    console.log(id);
  };
  return (
    <Draggable draggableId={id + ""} index={index}>
      {(drag, info) => (
        <Wrapper
          ref={drag.innerRef}
          {...drag.draggableProps}
          isDragging={info.isDragging}
        >
          <Handle {...drag.dragHandleProps}>=</Handle>
          <TextBox>{text}</TextBox>
          <DelBtn onClick={() => deleteCard()}>❌</DelBtn>
        </Wrapper>
      )}
    </Draggable>
  );
}

export default React.memo(Card);
