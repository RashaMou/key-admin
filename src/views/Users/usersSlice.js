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
    approveUserSuccess(state, action) {
      state.vetting.loading = false;
      const sub = action.payload;
      const users = state.vetting.users.filter((user) => user.sub !== sub);
      state.vetting.users = users;
    },
    approveUserFailure(state, action) {
      state.vetting.loading = false;
      state.vetting.error = action.payload;
    },
    denyUserStart(state) {
      state.vetting.loading = true;
    },
    denyUserSuccess(state, action) {
      const sub = action.payload;
      state.vetting.loading = false;
      const users = state.vetting.users.filter((user) => user.sub !== sub);
      state.vetting.users = users;
    },
    denyUserFailure(state, action) {
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
  denyUserStart,
  denyUserSuccess,
  denyUserFailure,
} = usersSlice.actions;
export default usersSlice.reducer;

export const getVettingUsers = () => async (dispatch) => {
  dispatch(getVettingUsersStart());
  try {
    const vettingUsers = await axios.get("http://localhost:8000/api/vetting");
    if (vettingUsers) {
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
    if (res) {
      dispatch(approveUserSuccess(res.data.approvedUser.sub));
    }
  } catch (error) {
    dispatch(approveUserFailure(error));
  }
};

export const denyUser = (id) => async (dispatch) => {
  dispatch(denyUserStart());
  try {
    const res = await axios.delete(`http://localhost:8000/api/vetting/${id}`);
    if (res) {
      dispatch(denyUserSuccess(res.data.sub));
    }
  } catch (error) {
    dispatch(denyUserFailure(error));
  }
};
