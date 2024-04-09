import { createSlice, isAction } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      // console.log(`Hello item Delete ${action.payload}`);
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {
      // console.log("log deleted");
      return [];
    },
  },
});


export const { addUser, removeUser, deleteUsers } = userSlice.actions;
export default userSlice.reducer;
