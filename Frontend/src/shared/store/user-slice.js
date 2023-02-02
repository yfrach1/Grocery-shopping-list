import { createSlice } from "@reduxjs/toolkit";

const initialUserState = { user: {} };

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUserData(state, action) {
      state.user = action.payload;
      console.log(state.user);
    },
    // logout(state) {
    //   state.isAuthenticated = false;
    // },
  },
});
export default userSlice;
export const userActions = userSlice.actions;
