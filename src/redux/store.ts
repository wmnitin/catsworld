import { configureStore } from "@reduxjs/toolkit";
import catsReducer from "../Components/Home/cats.reducer";

export default configureStore({
  reducer: {
    catStore: catsReducer,
  },
});
