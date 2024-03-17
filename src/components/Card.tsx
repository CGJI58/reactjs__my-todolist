import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import { ICard } from "../atoms";

const Wrapper = styled.div<{ isDragging: boolean }>`
  display: flex;
  background-color: ${(props) => (props.isDragging ? "skyblue" : "darkblue")};
  margin: 10px 0;
  padding: 5px;
`;

interface ICardProps extends ICard {
  index: number;
}

function Card({ id, text, index }: ICardProps) {
  return (
    <Draggable draggableId={id + ""} index={index}>
      {(drag, info) => (
        <Wrapper
          ref={drag.innerRef}
          {...drag.dragHandleProps}
          {...drag.draggableProps}
          isDragging={info.isDragging}
        >
          {text}
        </Wrapper>
      )}
    </Draggable>
  );
}

export default React.memo(Card);
