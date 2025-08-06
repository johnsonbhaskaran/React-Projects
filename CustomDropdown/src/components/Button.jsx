const Button = ({ children }) => {
  return (
    <button className='flex bg-blue-600 px-4 py-2 rounded-lg font-medium text-white'>
      {children}
    </button>
  );
};
export default Button;
