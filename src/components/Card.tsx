import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  background-color: blue;
  margin: 10px 0;
`;

interface ICardProps {
  text: string;
  index: number;
}

function Card({ text, index }: ICardProps) {
  console.log(text, "has been rendered");
  return (
    <Draggable draggableId={text} index={index}>
      {(drag) => (
        <Wrapper
          ref={drag.innerRef}
          {...drag.dragHandleProps}
          {...drag.draggableProps}
        >
          {text}
        </Wrapper>
      )}
    </Draggable>
  );
}

export default React.memo(Card);
