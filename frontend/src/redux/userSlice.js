import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUsers : null
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setotherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
  },
});

// Correctly export the action
export const { setAuthUser,setotherUsers } = userSlice.actions;
export default userSlice.reducer;
