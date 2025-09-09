import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieOrSeriesDetailAsync,
  getMovieOrSeriesDetail,
} from "../features/movies/movieSlice";
import { useEffect } from "react";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieOrSeriesDetail);
  console.log(data);

  useEffect(() => {
    dispatch(fetchMovieOrSeriesDetailAsync(imdbID));
  }, [dispatch, imdbID]);

  return (
    <div>
      <h3>Movie Details</h3>
      <div>{data.Title}</div>
      <img src={data.Poster} alt='' />
    </div>
  );
};
export default MovieDetail;
