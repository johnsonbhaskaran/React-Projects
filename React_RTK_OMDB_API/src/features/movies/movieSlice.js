import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/MovieApiKey";

export const fetchMoviesAsync = createAsyncThunk("movies/getAllMovies", async () => {
  const movieText = "scooby";
  const response = await movieApi
    .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
    .catch((err) => console.log("Error: ", err));

  return response.data;
});

export const fetchSeriesAsync = createAsyncThunk("movies/getAllSeries", async () => {
  const seriesText = "friends";
  const response = await movieApi
    .get(`?apikey=${APIkey}&s=${seriesText}&type=series`)
    .catch((err) => console.log("Error: ", err));

  return response.data;
});

export const fetchMovieOrSeriesDetailAsync = createAsyncThunk(
  "movies/getMovieOrSeriesDetail",
  async (id) => {
    const response = await movieApi.get(`?apikey=${APIkey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: [],
  series: [],
  details: {},
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
    builder.addCase(fetchSeriesAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.series = action.payload;
    });
    builder.addCase(fetchMovieOrSeriesDetailAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.details = action.payload;
    });
  },
});

// export const { addMovies } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllSeries = (state) => state.movies.series;
export const getMovieOrSeriesDetail = (state) => state.movies.details;
export default movieSlice.reducer;
