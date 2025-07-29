const Navbar = () => {
  let data = "boy";

  return <>{data === "boy" ? <h1>Boy</h1> : <h1>Girl</h1>}</>;
};

export default Navbar;
