const Button = ({ children }) => {
  return (
    <button className='bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded-lg font-medium text-white cursor-pointer'>
      {children}
    </button>
  );
};
export default Button;
