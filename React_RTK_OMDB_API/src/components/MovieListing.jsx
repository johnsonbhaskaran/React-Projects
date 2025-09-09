import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice.js";
import MovieCard from "./MovieCard";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : (
      <div className='text-red-500'>Error: {movies.Error}</div>
    );

  return (
    <div>
      <div>
        <h2 className='mt-4 text-3xl'>Movies</h2>
        <div className='gap-4 grid grid-cols-4 xl:grid-cols-6 my-6'>{renderMovies}</div>
      </div>
    </div>
  );
};
export default MovieListing;
