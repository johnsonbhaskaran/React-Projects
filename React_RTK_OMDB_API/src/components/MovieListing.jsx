import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice.js";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = " ";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className='text-red-500'>Error: {movies.Error}</div>
    );

  return (
    <div>
      <div>
        <h2>Dovies</h2>
        <div>{renderMovies}</div>
      </div>
    </div>
  );
};
export default MovieListing;
