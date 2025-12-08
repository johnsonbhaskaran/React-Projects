import FunctionContextComponents from "../ContextComponents/FunctionContextComponents";
import RedBlueContextComponent from "../ContextComponents/RedBlueContextComponent";
import { ThemeProvider } from "../context/ThemeContext";

const UseContextHook = () => {
  return (
    <>
      <ThemeProvider>
        <FunctionContextComponents />
        <RedBlueContextComponent />
      </ThemeProvider>
    </>
  );
};
export default UseContextHook;
