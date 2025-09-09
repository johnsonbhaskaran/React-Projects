import MovieListing from "./MovieListing.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMoviesAsync } from "../features/movies/movieSlice.js";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};
export default Home;
