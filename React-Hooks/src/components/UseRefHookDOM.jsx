import { useRef } from "react";

const UseRefHookDOM = () => {
  const inputRef = useRef();

  const btnClicked = () => {
    console.log(inputRef.current);
    inputRef.current.style.background = "red";
  };

  return (
    <>
      <input type='text' ref={inputRef} />
      <button onClick={btnClicked}>Red</button>
    </>
  );
};

export default UseRefHookDOM;
