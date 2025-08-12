const LoginForm = ({ clickHandled }) => {
  console.log("Login Form component rendered");

  return (
    <div>
      LoginForm
      <button onClick={clickHandled}>Login</button>
    </div>
  );
};
export default LoginForm;
