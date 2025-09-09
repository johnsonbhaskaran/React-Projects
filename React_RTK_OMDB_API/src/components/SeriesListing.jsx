import { useSelector } from "react-redux";
import { getAllSeries } from "../features/movies/movieSlice.js";
import MovieCard from "./MovieCard";

const SeriesListing = () => {
  const series = useSelector(getAllSeries);
  let renderSeries = "";

  renderSeries =
    series.Response === "True" ? (
      series.Search.map((series, index) => <MovieCard key={index} data={series} />)
    ) : (
      <div className='text-red-500'>Error: {series.Error}</div>
    );

  return (
    <div>
      <div>
        <h2 className='mt-4 text-3xl'>Series</h2>
        <div className='gap-4 grid grid-cols-4 xl:grid-cols-6 my-6'>{renderSeries}</div>
      </div>
    </div>
  );
};
export default SeriesListing;
