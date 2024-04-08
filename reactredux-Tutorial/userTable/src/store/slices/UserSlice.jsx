import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {
    addUser(state, action) {},
    removeuser(state, action) {},
    deleteUsers(state, action) {},
  },
});

export default { userSlice.reducer };
