import { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [value, setValue] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    countRef.current = countRef.current + 1;
  });

  const plusOne = () => {
    setValue((prev) => prev + 1);
  };

  const minusOne = () => {
    setValue((prev) => prev - 1);
  };

  return (
    <>
      <button
        onClick={() => {
          plusOne();
        }}
      >
        +1
      </button>
      <h1>{value}</h1>
      <button
        onClick={() => {
          minusOne();
        }}
      >
        -1
      </button>

      <h1>Rendered {countRef.current} times!</h1>
    </>
  );
};

export default UseRefHook;
