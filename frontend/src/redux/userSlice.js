import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    authUser: null,
    otherUsers : null,
    selectedUser : null 
  },
  reducers: {
    setAuthUser: (state, action) => {
      state.authUser = action.payload;
    },
    setotherUsers: (state, action) => {
      state.otherUsers = action.payload;
    },
    setSelectedUser : (state,action) => {
      state.selectedUser = action.payload
    }
  },
});

// Correctly export the action
export const { setAuthUser,setotherUsers,setSelectedUser } = userSlice.actions;
export default userSlice.reducer;
