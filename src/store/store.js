import { configureStore } from "@reduxjs/toolkit";

// reducer import
import currentUserReducer from "./currentUserSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
  },
});

export default store;