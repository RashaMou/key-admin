import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    vetting: {
      users: [],
      loading: false,
      error: null,
    },
  },
  reducers: {
    getVettingUsersStart(state) {
      state.vetting.loading = true;
    },
    getVettingUsersSucess(state, action) {
      const { id, name, email } = action.payload;
      state.vetting.loading = false;
      state.vetting.users.push({ id, name, email });
    },
    getVettingUsersFailure(state, action) {
      state.vetting.loading = false;
      state.vetting.error = action.payload;
    },
  },
});

export const {
  getVettingUsersStart,
  getVettingUsersSucess,
  getVettingUsersFailure,
  approveUser,
} = usersSlice.actions;
export default usersSlice.reducer;

export const getVettingUsers = () => async (dispatch) => {
  console.log("getVettingUsers");
  dispatch(getVettingUsersStart());
  try {
    const vettingUsers = await axios.get("http://localhost:8000/api/vetting");
    if (vettingUsers) {
      console.log("vettingUsers", vettingUsers);
      //   dispatch(getVettingUsersSucess(vettingUsers));
    }
  } catch (error) {
    dispatch(getVettingUsersFailure(error));
  }
};
