import { createSlice } from "@reduxjs/toolkit";

const socketSlice = createSlice({
  name: "socket",
  initialState: {
    socket: null,
  },
  reducers: {
    setSocket: (state, action) => {
        console.log(action.payload,"action payload........");
      state.socket = action.payload;
    },

  },
});

// Correctly export the action
export const { setSocket } = socketSlice.actions;
export default socketSlice.reducer;