import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className='bg-slate-700 mx-3 hover:scale-105 transition-all duration-150'>
      <Link to={`/movie/${data.imdbID}`}>
        <div className=''>
          <div className=''>
            <img className='w-full h-[32rem] object-cover' src={data.Poster} alt={data.Title} />
          </div>
          <div className='p-5 h-32'>
            <h4 className='text-xl'>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default MovieCard;
