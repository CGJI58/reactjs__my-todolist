import { atom } from "recoil";

export interface ICard {
  text: string;
  id: number;
  category: "TODO" | "DOING" | "DONE";
}

export const cardState = atom<ICard[]>({
  key: "card",
  default: [],
});
