import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchMoviesAsync = createAsyncThunk("movies/getAllMovies", async () => {
  const movieText = "Harry";
  const response = await movieApi
    .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
    .catch((err) => console.log("Error: ", err));

  return response.data;
});

const initialState = {
  movies: [],
  loading: false,
  error: null,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMoviesAsync.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMoviesAsync.fulfilled, (state, action) => {
        state.loading = false;
        state.movies = action.payload;
      })
      .addCase(fetchMoviesAsync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

// export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;
