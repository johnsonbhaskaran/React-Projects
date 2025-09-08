import MovieListing from "./MovieListing.jsx";
import { useEffect } from "react";
import movieApi from "../common/apis/movieApi.js";
import { APIkey } from "../common/apis/MovieApiKey.js";

const Home = () => {
  useEffect(() => {
    const movieText = "Harry";

    const fetchMovies = async () => {
      const response = await movieApi
        .get(`?apikey=${APIkey}&s=${movieText}&type=movie`)
        .catch((err) => {
          console.log("Err :", err);
        });
      console.log("The response from API:", response);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <div>Home</div>
      <MovieListing />
    </div>
  );
};
export default Home;
