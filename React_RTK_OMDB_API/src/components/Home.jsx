import MovieListing from "./MovieListing.jsx";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import movieApi from "../common/apis/movieApi.js";
import { APIkey } from "../common/apis/MovieApiKey.js";
import { addMovies } from "../features/movies/movieSlice.js";

const Home = () => {
  const movieText = "Harry";
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      dispatch(addMovies(response.data));
    };
    fetchMovies();
  }, [dispatch]);

  return (
    <div>
      <MovieListing />
    </div>
  );
};
export default Home;
