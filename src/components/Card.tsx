import { useSetRecoilState } from "recoil";
import { ICard, cardState } from "../atoms";
import styled from "styled-components";

const Wrapper = styled.div`
  li {
    display: flex;
  }
`;

function Card({ text, category, id }: ICard) {
  const setCards = useSetRecoilState(cardState);
  const onClick = (newCategory: ICard["category"]) => {
    setCards((prevCards) => {
      const targetIndex = prevCards.findIndex((card) => card.id === id);
      const newCard = { text, id, category: newCategory };
      const newCards = [...prevCards];
      newCards.splice(targetIndex, 1, newCard);
      return newCards;
    });
  };
  return (
    <Wrapper>
      <li>
        <span>{text}</span>
        <div>
          {category !== "TODO" && (
            <button onClick={() => onClick("TODO")}>ToDo</button>
          )}
          {category !== "DOING" && (
            <button onClick={() => onClick("DOING")}>Doing</button>
          )}
          {category !== "DONE" && (
            <button onClick={() => onClick("DONE")}>Done</button>
          )}
        </div>
      </li>
    </Wrapper>
  );
}

export default Card;
