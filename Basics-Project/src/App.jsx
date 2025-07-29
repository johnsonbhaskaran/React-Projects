import { useState } from "react";

const App = () => {
  const [x, setx] = useState(0);

  const btnClickHandler = () => {
    setx((x) => x + 1);
  };

  return (
    <div>
      <h1>{x}</h1>
      <button
        onClick={() => {
          btnClickHandler();
        }}
      >
        Click me
      </button>
    </div>
  );
};

export default App;
