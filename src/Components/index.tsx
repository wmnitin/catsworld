import { IState, IStore } from "./types";
import { useDispatch, useSelector } from "react-redux";
import Cats from "./Home/Cats";

function CatsContainer() {
  const state = useSelector(
    (state: IStore) => state.catStore
  ) as unknown as IState;
  const dispatch = useDispatch();
  const props = {
    ...state,
    dispatch,
  };
  return <Cats {...props} />;
}

export default CatsContainer;
