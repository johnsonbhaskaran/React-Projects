const Navbar = () => {
  let x = "John";
  let usersArray = ["user 1", "user 2", "user 3", "user 4", "user 5"];

  return (
    <>
      Navbar
      <div>{x}</div>
      <ol>
        {usersArray.map((user, id) => {
          return <li key={id}>{user}</li>;
        })}
      </ol>
    </>
  );
};

export default Navbar;
