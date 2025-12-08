import { useTheme, useUpdateTheme } from "../context/ThemeContext";

const FunctionContextComponents = () => {
  const theme = useTheme();
  const toggleTheme = useUpdateTheme();

  return (
    <>
      <button className='px-5 py-3 border rounded-md cursor-pointer' onClick={toggleTheme}>
        Toggle Theme
      </button>
      {!theme ? (
        <div className='flex justify-center items-center bg-white mt-8 rounded w-2/3 h-32 text-black align-middle'>
          Theme
        </div>
      ) : (
        <div className='flex justify-center items-center bg-black mt-8 rounded w-2/3 h-32 text-white'>
          Theme
        </div>
      )}
    </>
  );
};
export default FunctionContextComponents;
