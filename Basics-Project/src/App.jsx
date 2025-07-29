import { useRef } from "react";
import FirstComponent from "./components/FirstComponent";

const App = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button
        onClick={() => {
          console.log(inputRef.current.value);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default App;
