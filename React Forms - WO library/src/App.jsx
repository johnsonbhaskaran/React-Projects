import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  return (
    <>
      <div className='app'>
        <form action=''>
          <FormInput placeholder={"username"} />
          <FormInput placeholder={"email"} />
          <FormInput placeholder={"fullname"} />
          <FormInput placeholder={"password"} />
        </form>
      </div>
    </>
  );
}

export default App;
