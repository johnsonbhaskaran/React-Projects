import MovieListing from "./MovieListing.jsx";
import SeriesListing from "./SeriesListing.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesAsync, fetchSeriesAsync } from "../features/movies/movieSlice.js";

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "Harry";
  const seriesText = "Friends";

  useEffect(() => {
    dispatch(fetchMoviesAsync(movieText));
    dispatch(fetchSeriesAsync(seriesText));
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
      <SeriesListing />
    </div>
  );
};
export default Home;
