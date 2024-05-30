import { createSlice } from "@reduxjs/toolkit";
import Increment from "../../components/increment/Increment";

const initialState = {
  value: Number(localStorage.getItem("countValue")) || 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    decrement: (state, action) => {
      state.value -= action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});
export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
