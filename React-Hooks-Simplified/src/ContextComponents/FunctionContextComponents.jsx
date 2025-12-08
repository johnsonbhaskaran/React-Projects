import { useContext } from "react";
import { ThemeContext } from "../Hooks/UseContextHook";

const FunctionContextComponents = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      {!theme ? (
        <div className='flex justify-center items-center bg-white mt-8 rounded w-1/2 h-32 text-black align-middle'>
          Theme
        </div>
      ) : (
        <div className='flex justify-center items-center bg-black mt-8 rounded w-1/2 h-32 text-white'>
          Theme
        </div>
      )}
    </>
  );
};
export default FunctionContextComponents;
