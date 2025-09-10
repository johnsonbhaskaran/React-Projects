import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice.js";
import Slider from "react-slick";
import MovieCard from "./MovieCard";
import { settings } from "../common/slickSettings.js";

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
        <div className='my-6'>
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
    </div>
  );
};
export default MovieListing;
