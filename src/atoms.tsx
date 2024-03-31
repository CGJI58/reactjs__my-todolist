import { atom } from "recoil";

export interface ICard {
  id: number;
  text: string;
}

type IBoard = string;

interface IboardsListState {
  [key: IBoard]: ICard[];
}

export const boardsListState = atom<IboardsListState>({
  key: "boardslist",
  default: {
    "to do": [],
    doing: [],
    done: [],
    a: [],
    b: [],
    c: [],
  },
});
