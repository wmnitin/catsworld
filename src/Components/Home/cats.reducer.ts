import { GET_CATS } from "../../redux/actionTypes";

const initialState = {
  cats: [],
};

function catsReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CATS:
      return { ...state, cats: action.payload };
    case "UPDATE_ME":
      const catsCopy = JSON.parse(JSON.stringify(state.cats));
      catsCopy.map((data: any) => {
        if (data.id === action.payload.id) {
          data[action.payload.keyname] = action.payload.value;
        }
      });
      return {
        ...state,
        cats: catsCopy,
      };
    default:
      return state;
  }
}

export default catsReducer;
