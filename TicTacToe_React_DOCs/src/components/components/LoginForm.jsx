const LoginForm = ({ handleClick }) => {
  console.log("Login Form component rendered");

  return (
    <div>
      <h1 className='text-5xl'>LoginForm</h1>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
export default LoginForm;
