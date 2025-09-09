import MovieListing from "./MovieListing.jsx";
import SeriesListing from "./SeriesListing.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesAsync, fetchSeriesAsync } from "../features/movies/movieSlice.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
    dispatch(fetchSeriesAsync());
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
      <SeriesListing />
    </div>
  );
};
export default Home;
