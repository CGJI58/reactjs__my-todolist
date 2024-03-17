import { atom } from "recoil";

export interface ICard {
  id: number;
  text: string;
}

interface IboardsListState {
  [key: string]: ICard[];
}

export const boardsListState = atom<IboardsListState>({
  key: "boardslist",
  default: {
    "to do": [],
    doing: [],
    done: [],
  },
});
