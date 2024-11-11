// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import tableReducer from "./features/tableSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    table: tableReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
