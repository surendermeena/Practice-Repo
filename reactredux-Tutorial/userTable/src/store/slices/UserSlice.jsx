import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeuser(state, action) {},
    deleteUsers(state, action) {},
  },
});

export const { addUser, removeUser, deleteUsers } = userSlice.actions;
export default userSlice.reducer;
