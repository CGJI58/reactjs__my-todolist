import { atom, selector } from "recoil";

export interface ICard {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

export const cardState = atom<ICard[]>({
  key: "card",
  default: [],
});

export const cardSelector = selector({
  key: "cardSelector",
  get: ({ get }) => {
    const cards = get(cardState);
    return [
      cards.filter((card) => card.category === "TODO"),
      cards.filter((card) => card.category === "DOING"),
      cards.filter((card) => card.category === "DONE"),
    ];
  },
});
