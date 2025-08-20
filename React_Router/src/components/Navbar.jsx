import logo from "../assets/logo.jpg";

const Navbar = () => {
  return (
    <div>
      <img src={logo} alt='' />
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <button>Get Started</button>
    </div>
  );
};
export default Navbar;
