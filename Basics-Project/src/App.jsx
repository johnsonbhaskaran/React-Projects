import { useState } from "react";
import FirstComponent from "./components/FirstComponent";

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
      <FirstComponent dataPasssing={x} functionPassing={setx} />
    </div>
  );
};

export default App;
