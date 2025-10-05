import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  // const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    console.log(Object.fromEntries(data.entries()));
  };

  return (
    <>
      <div className='app'>
        <form onSubmit={handleSubmit}>
          <FormInput name='username' placeholder={"username"} />
          <FormInput name='email' placeholder={"email"} />
          <FormInput name='fullname' placeholder={"fullname"} />
          <FormInput name='password' placeholder={"password"} />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
