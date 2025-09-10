import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSeriesAsync, fetchMoviesAsync } from "../features/movies/movieSlice";

const Header = () => {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (term === "") return alert("Please enter search term!");
    dispatch(fetchMoviesAsync(term));
    dispatch(fetchSeriesAsync(term));
    setTerm("");
  };

  return (
    <div className='flex items-center gap-32 bg-slate-700 px-16 py-4 text-left'>
      <Link to='/'>
        <div className='font-semibold text-3xl'>Movie App</div>
      </Link>
      <form onSubmit={submitHandler}>
        <input
          className='bg-slate-300/30 focus:bg-white px-3 border border-slate-700 focus:rounded-none focus:outline-none w-72 h-8 text-black'
          id='search'
          value={term}
          placeholder='Search Movies or Shows'
          onChange={(e) => setTerm(e.target.value)}
        />
        <button
          type='submit'
          className='bg-white px-3 border border-slate-700 focus:rounded-none focus:outline-none h-8 text-black cursor-pointer'
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default Header;
