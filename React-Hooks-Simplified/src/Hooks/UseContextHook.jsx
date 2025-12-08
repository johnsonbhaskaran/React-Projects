import { createContext, useState } from "react";
import FunctionContextComponents from "../ContextComponents/FunctionContextComponents";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

const UseContextHook = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }

  return (
    <>
      <ThemeContext.Provider value={darkTheme}>
        <button className='px-5 py-3 border rounded-md cursor-pointer' onClick={toggleTheme}>
          Toggle Theme
        </button>
        <FunctionContextComponents />
      </ThemeContext.Provider>
    </>
  );
};
export default UseContextHook;
