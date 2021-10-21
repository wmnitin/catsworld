import { Dispatch, Reducer } from "redux";

export interface IStore {
  catStore: Reducer;
}

export interface IState {
  cats: [ICatObj];
}

export interface ICatProps {
  cats: [ICatObj];
  dispatch: Dispatch;
}

export interface ICatObj {
  url: string;
  id: string;
  sub_id: string;
  vote: number;
  fav: boolean;
  favourite_id: number;
}
