import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className='navbar'>
      <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/blog'>Blog</Link>
        <button onClick={toggleTheme}>{theme === "dark" ? "dark mode" : "light mode"}</button>
      </div>
    </nav>
  );
};
export default Navbar;
