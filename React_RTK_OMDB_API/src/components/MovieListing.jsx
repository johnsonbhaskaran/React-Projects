import { useSelector } from "react-redux";
import { getAllMovies } from "../features/movies/movieSlice.js";
import Slider from "react-slick";
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

  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div>
        <h2 className='mt-4 text-3xl'>Movies</h2>
        <div className='my-6 overflow-visible'>
          <Slider {...settings}>{renderMovies}</Slider>
        </div>
      </div>
    </div>
  );
};
export default MovieListing;
