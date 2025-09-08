import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice";
import MovieCard from "./MovieCard.jsx";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className='text-red-500'>{movies.Error}</div>
    );

  console.log(movies);
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
