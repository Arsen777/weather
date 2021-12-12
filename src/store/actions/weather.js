import { createSlice } from '@reduxjs/toolkit';

const weatherSlice = createSlice({
  name: 'auth',
  initialState: {},
  reducers: {
    saveWeather: (state, action) => {
      state[action.payload.city] = action.payload.weather;
    },
  }
});

const { saveWeather } = weatherSlice.actions;

export { saveWeather };

export default weatherSlice.reducer;
