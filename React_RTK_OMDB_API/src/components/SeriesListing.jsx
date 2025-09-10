import { useSelector } from "react-redux";
import { getAllSeries, getLoadingState } from "../features/movies/movieSlice.js";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import { settings } from "../common/slickSettings.js";

const SeriesListing = () => {
  const series = useSelector(getAllSeries);
  const loading = useSelector(getLoadingState);
  let renderSeries = "";

  renderSeries =
    series.Response === "True" ? (
      series.Search.map((series, index) => <MovieCard key={index} data={series} />)
    ) : loading ? (
      <div className='flex justify-center items-center text-2xl'>LOADING... Please wait...</div>
    ) : (
      <div className='text-red-500'>Error: {series.Error}</div>
    );

  return (
    <div>
      <div>
        <h2 className='mt-4 text-3xl'>Series</h2>
        <div className='my-6'>
          <Slider {...settings}>{renderSeries}</Slider>
        </div>
      </div>
    </div>
  );
};
export default SeriesListing;
