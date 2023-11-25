import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = process.env.REACT_APP_HOST || "";

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    userLength: 0,
  },
  reducers: {
    setAllUser: (state, action) => {
      state.users = action.payload.users;
      state.userLength = action.payload.userLength;
      return;
    },
    setDeleteUser: (state, action) => {
      state.users = state.users.filter((u) => u._id !== action.payload._id);
      return;
    },
    setEditUser: (state, action) => {
      const editedUser = action.payload;
      const index = state.users.findIndex(
        (user) => user._id === editedUser._id
      );

      if (index !== -1) {
        state.users[index] = editedUser;
      } else {
        state.users = [...state.users, editedUser];
      }
      return;
    },
  },
});

export const getUser =
  (page = 1, domain = "", gender = "", search = "") =>
  async (dispatch) => {
    try {
      let link = `${host}/api/users?page=${page}&domain=${domain}&gender=${gender}&search=${search}`;
      const { data } = await axios.get(link);
      dispatch(userSlice.actions.setAllUser(data));
    } catch (error) {
      toast.error(error?.response?.data?.message, { autoClose: 5000 });
      console.error("Error fetching data:", error);
    }
  };
export const deleteUser = (id) => async (dispatch) => {
  try {
    let link = `${host}/api/users/${id}`;
    const { data } = await axios.delete(link);
    dispatch(userSlice.actions.setDeleteUser(data));
    toast.success("User deleted successfully.", { autoClose: 5000 });
  } catch (error) {
    toast.error(error?.response?.data?.message, { autoClose: 5000 });
    console.error("Error fetching data:", error);
  }
};

export const editUser = (id, newData) => async (dispatch) => {
  try {
    let link = `${host}/api/users/${id}`;
    const { data } = await axios.put(link, newData);
    dispatch(userSlice.actions.setEditUser(data));
    toast.success("User updated successfully.", { autoClose: 5000 });
  } catch (error) {
    toast.error(error?.response?.data?.message, { autoClose: 5000 });
    console.error("Error fetching data:", error);
  }
};

export const createUser = (newData) => async (dispatch) => {
  try {
    let link = `${host}/api/users`;
    const { data } = await axios.post(link, newData);
    toast.success("User created successfully.", { autoClose: 5000 });
    return true;
  } catch (error) {
    toast.error(error?.response?.data?.message, { autoClose: 5000 });
    console.error("Error fetching data:", error);
    return false;
  }
};

export default userSlice.reducer;
