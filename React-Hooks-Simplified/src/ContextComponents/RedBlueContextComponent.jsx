import { useTheme } from "../context/ThemeContext";

const RedBlueContextComponent = () => {
  const theme = useTheme();

  return (
    <>
      {!theme ? (
        <div className='flex justify-center items-center bg-red-500 mt-8 rounded w-2/3 h-32 text-black align-middle'>
          Theme
        </div>
      ) : (
        <div className='flex justify-center items-center bg-blue-500 mt-8 rounded w-2/3 h-32 text-white'>
          Theme
        </div>
      )}
    </>
  );
};
export default RedBlueContextComponent;
