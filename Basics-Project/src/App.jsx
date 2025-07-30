import { useRef, useState } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const inputRef = useRef(null);

  return (
    <div>
      <input ref={inputRef} type='text' />
      <button
        onClick={(e) => {
          e.preventDefault();
          setData([...data, inputRef.current.value]);
        }}
      >
        Submit
      </button>
      {data.map((item, index) => {
        return (
          <h1 key={index}>
            {index} {item}
          </h1>
        );
      })}
    </div>
  );
};

export default App;
