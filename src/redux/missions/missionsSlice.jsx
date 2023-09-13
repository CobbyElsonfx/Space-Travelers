import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const fetchMissions = createAsyncThunk('fetchMissions', async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/missions');
  return response.data;
});

const initialState = {
  missions: [],
  isloading: false,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMissions.pending, (state) => ({
        ...state,
        isloading: true,
      }))
      .addCase(fetchMissions.fulfilled, (state, action) => ({
        ...state,
        missions: action.payload,
        isloading: false,
      }))
      .addCase(fetchMissions.rejected, (state) => ({
        ...state,
        isloading: false,
      }));
  },
});

export { fetchMissions };

export default missionsSlice.reducer;
