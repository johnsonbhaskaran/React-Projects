const AdminPanel = ({ handleClick }) => {
  console.log("Admin Panel component rendered");

  return (
    <div>
      <h1 className='text-5xl'>AdminPanel</h1>
      <button onClick={handleClick}>Logout</button>
    </div>
  );
};
export default AdminPanel;
