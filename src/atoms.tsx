import { atom, selector } from "recoil";

interface IboardsListState {
  [key: string]: string[];
}

export const boardsListState = atom<IboardsListState>({
  key: "board",
  default: {
    "to do": ["a", "b"],
    doing: ["c"],
    done: ["d", "e", "f"],
  },
});
