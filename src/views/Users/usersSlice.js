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
      state.vetting.loading = false;
      state.vetting.users.push(...action.payload.data);
    },
    getVettingUsersFailure(state, action) {
      state.vetting.loading = false;
      state.vetting.error = action.payload;
    },
    approveUserStart(state) {
      state.vetting.loading = true;
    },
    approveUserSucess(state, action) {
      state.vetting.loading = false;
      state.vetting.users.filter((user) => {
        return user.id !== action.payload.id;
      });
    },
    approveUserFailure(state, action) {
      state.vetting.loading = false;
      state.vetting.error = action.payload;
    },
  },
});

export const {
  getVettingUsersStart,
  getVettingUsersSucess,
  getVettingUsersFailure,
  approveUserStart,
  approveUserSuccess,
  approveUserFailure,
  getUserStart,
  getUserSuccess,
  getUserFailure,
} = usersSlice.actions;
export default usersSlice.reducer;

export const getVettingUsers = () => async (dispatch) => {
  dispatch(getVettingUsersStart());
  try {
    const vettingUsers = await axios.get("http://localhost:8000/api/vetting");
    if (vettingUsers) {
      console.log("vettingUsers", vettingUsers);
      dispatch(getVettingUsersSucess(vettingUsers));
    }
  } catch (error) {
    dispatch(getVettingUsersFailure(error));
  }
};

export const approveUser = (id) => async (dispatch) => {
  console.log("approveUsers");
  dispatch(approveUserStart());
  try {
    const res = await axios.put(`http://localhost:8000/api/vetting/${id}`);
    dispatch(approveUserSuccess(res));
    console.log("res", res);
  } catch (error) {
    dispatch(approveUserFailure());
  }
};
