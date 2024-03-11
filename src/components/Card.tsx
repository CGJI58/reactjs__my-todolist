import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Context = styled.div``;

interface ICardProps {
  text: string;
  index: number;
}

function Card({ text, index }: ICardProps) {
  console.log(text, "has been rendered");
  return (
    <Draggable key={text} draggableId={text} index={index}>
      {(drag) => (
        <Context
          ref={drag.innerRef}
          {...drag.dragHandleProps}
          {...drag.draggableProps}
        >
          {text}
        </Context>
      )}
    </Draggable>
  );
}

export default React.memo(Card);
