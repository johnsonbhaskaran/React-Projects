import { useSelector } from "react-redux";
import { getAllMovies, getLoadingState } from "../features/movies/movieSlice.js";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { settings } from "../common/slickSettings.js";

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const loading = useSelector(getLoadingState);
  let renderMovies = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => <MovieCard key={index} data={movie} />)
    ) : loading ? (
      <div className='flex justify-center items-center text-2xl'>LOADING... Please wait...</div>
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
