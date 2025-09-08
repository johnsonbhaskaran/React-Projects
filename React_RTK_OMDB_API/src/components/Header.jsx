import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-slate-700 h-16'>
      <Link to='/'>
        <div className='font-semibold text-3xl'>Dovie App</div>
      </Link>
    </div>
  );
};
export default Header;
