import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchMovieOrSeriesDetailAsync,
  getMovieOrSeriesDetail,
  removeMovieOrSeriesDetail,
} from "../features/movies/movieSlice";
import { useEffect } from "react";

const MovieDetail = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();
  const data = useSelector(getMovieOrSeriesDetail);

  useEffect(() => {
    dispatch(fetchMovieOrSeriesDetailAsync(imdbID));
    return () => {
      dispatch(removeMovieOrSeriesDetail());
    };
  }, [dispatch, imdbID]);

  return (
    <>
      {Object.keys(data).length === 0 ? (
        <div className='flex justify-center items-center h-screen text-3xl'>...Loading</div>
      ) : (
        <div className='flex justify-center my-6'>
          <div className='space-y-6 mr-6 w-1/2'>
            <h2 className='text-5xl'>{data.Title}</h2>
            <div className='flex gap-6 text-slate-500'>
              <p>IMDB Rating: {data.imdbRating}</p>
              <p>IMDB Votes: {data.imdbVotes}</p>
              <p>Runtime: {data.Runtime}</p>
              <p>Year: {data.Year}</p>
            </div>
            <div className='space-y-3'>
              <p>{data.Plot}</p>
              <p>Director: {data.Director}</p>
              <p>Stars: {data.Actors}</p>
              <p>Genres: {data.Genre}</p>
              <p>Languages: {data.Language}</p>
              <p>Awards: {data.Awards}</p>
            </div>
          </div>
          <div className='w-fit'>
            <img src={data.Poster} alt={data.Title} />
          </div>
        </div>
      )}
    </>
  );
};
export default MovieDetail;
