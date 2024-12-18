import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
  name: "message",
  initialState: {
    messages: null,
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages = action.payload;
    },

  },
});

// Correctly export the action
export const { setMessages } = messageSlice.actions;
export default messageSlice.reducer;
