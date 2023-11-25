import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const host = process.env.REACT_APP_HOST || "";

const teamSlice = createSlice({
  name: "teams",
  initialState: {
    teams: [],
    team: {},
  },
  reducers: {
    setAllTeam: (state, action) => {
      state.teams = action.payload;
    },
    setSingleTeam: (state, action) => {
      state.team = action.payload;
    },
  },
});

export const getTeam = () => async (dispatch) => {
  try {
    let link = `${host}/api/team`;
    const { data } = await axios.get(link);
    dispatch(teamSlice.actions.setAllTeam(data));
  } catch (error) {
    console.error("Error fetching data:", error);
    toast.error(error?.response?.data?.message , { autoClose: 5000 });
  }
};

export const createTeam = (newTeam) => async (dispatch) => {
  try {
    let link = `${host}/api/team`;
    const { data } = await axios.post(link, newTeam);
    toast.success('Team created successfully.' , { autoClose: 5000 });
    return true;
  } catch (error) {
    console.error("Error fetching data:", error);
    toast.error(error?.response?.data?.message , { autoClose: 5000 });
    return false;
  }
};

export const getSingleTean = (id) => async (dispatch) => {
  try {
    let link = `${host}/api/team/${id}`;
    const { data } = await axios.get(link);
    dispatch(teamSlice.actions.setSingleTeam(data));
  } catch (error) {
    console.error("Error fetching data:", error);
    toast.error(error?.response?.data?.message , { autoClose: 5000 });
  }
};

export default teamSlice.reducer;
