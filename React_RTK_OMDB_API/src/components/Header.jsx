import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-slate-700 py-4'>
      <Link to='/'>
        <div className='font-semibold text-3xl'>Movie App</div>
      </Link>
    </div>
  );
};
export default Header;
