const MovieCard = ({ data }) => {
  return (
    <div className='bg-slate-700'>
      <div className=''>
        <div className=''>
          <img className='w-full' src={data.Poster} alt={data.Title} />
        </div>
        <div className='p-5'>
          <h4 className='relative text-xl'>{data.Title}</h4>
          <p>{data.Year}</p>
        </div>
      </div>
    </div>
  );
};
export default MovieCard;
