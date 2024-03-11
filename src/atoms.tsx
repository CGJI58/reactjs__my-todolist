import { atom, selector } from "recoil";

export const cardState = atom<string[]>({
  key: "cardasdf",
  default: ["a", "b", "c", "d"],
});
