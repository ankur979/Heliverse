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
      return;
    },
    setSingleTeam: (state, action) => {
      state.team = action.payload;
      return;
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
  }
};

export const createTeam = (newTeam) => async (dispatch) => {
  try {
    let link = `${host}/api/team`;
    const { data } = await axios.post(link, newTeam);
    alert("Team created successfully.");
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export const getSingleTean = (id) => async (dispatch) => {
  try {
    let link = `${host}/api/team/${id}`;
    const { data } = await axios.get(link);
    dispatch(teamSlice.actions.setSingleTeam(data));
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default teamSlice.reducer;
