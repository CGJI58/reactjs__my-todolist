import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div<{ isDragging: boolean }>`
  display: flex;
  background-color: ${(props) => (props.isDragging ? "skyblue" : "darkblue")};
  margin: 10px 0;
  padding: 5px;
`;

interface ICardProps {
  text: string;
  index: number;
}

function Card({ text, index }: ICardProps) {
  console.log(text, "has been rendered");
  return (
    <Draggable draggableId={text} index={index}>
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
