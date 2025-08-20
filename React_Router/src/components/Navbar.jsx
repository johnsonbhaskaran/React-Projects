import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt='' />
      <ul>
        <Link to='/'>
          <li>Home</li>
        </Link>
        <Link to='/products'>
          <li>Products</li>
        </Link>
        <Link to='/about'>
          <li>About</li>
        </Link>
        <Link to='/contact'>
          <li>Contact</li>
        </Link>
      </ul>
      <button>
        <div>Get Started</div>
      </button>
    </div>
  );
};
export default Navbar;
