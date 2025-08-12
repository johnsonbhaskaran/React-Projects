const LoginForm = ({ onclick }) => {
  console.log("Login Form component rendered");

  return (
    <div>
      LoginForm
      <button onClick={onclick}>Login</button>
    </div>
  );
};
export default LoginForm;
