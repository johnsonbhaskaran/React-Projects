import { useRef } from "react";
import "./App.css";
import FormInput from "./components/FormInput";

function App() {
  // const [username, setUsername] = useState("");

  const usernameRef = useRef();
  const emailRef = useRef();
  const fullnameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(usernameRef.current.value);
    console.log(emailRef.current.value);
    console.log(fullnameRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <>
      <div className='app'>
        <form onSubmit={handleSubmit}>
          <FormInput refer={usernameRef} name='username' placeholder={"username"} />
          <FormInput refer={emailRef} name='email' placeholder={"email"} />
          <FormInput refer={fullnameRef} name='fullname' placeholder={"fullname"} />
          <FormInput refer={passwordRef} name='password' placeholder={"password"} />
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
