import { createSlice } from "@reduxjs/toolkit";
import { PURGE } from "redux-persist";

const initialState = {
  counter: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increaseCounter: (state, action) => {
      state.counter = state.counter + 1;
    },
    decreaseCounter: (state, action) => {
      state.counter = state.counter - 1;
    },
    default: (state, action) => {
      return state;
    }
  },
  extraReducers(builder) {
    builder.addCase(PURGE, (state, action) => {
      state = initialState;
    });
    builder.addCase("INCREASE_COUNT", (state, action) => {
      state.counter = state.counter + 1;
    });
    builder.addCase("DECREASE_COUNT", (state, action) => {
      state.counter = state.counter - 1;
    });
    builder.addDefaultCase((state, action) => {
      return state;
    });
  },
});

export const { increaseCounter, decreaseCounter } = counter.actions;

export default counter.reducer;
