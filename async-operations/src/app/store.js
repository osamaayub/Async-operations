import { configureStore } from "@reduxjs/toolkit";
import contentReducer from "../features/ContentSlice";



const store = configureStore({
  reducer: {
    content: contentReducer
  }
});

export default store;