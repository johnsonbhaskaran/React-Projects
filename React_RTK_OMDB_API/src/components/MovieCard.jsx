import { Link } from "react-router-dom";
import MovieDetail from "./MovieDetail";

const MovieCard = ({ data }) => {
  return (
    <div className='bg-slate-700 hover:scale-105 transition-all duration-150'>
      <Link to={`/movie/${data.imdbID}`}>
        <div className=''>
          <div className=''>
            <img className='w-full' src={data.Poster} alt={data.Title} />
          </div>
          <div className='p-5'>
            <h4 className='relative text-xl'>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MovieCard;
