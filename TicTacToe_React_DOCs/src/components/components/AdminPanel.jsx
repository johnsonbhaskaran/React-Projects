const AdminPanel = ({ onclick }) => {
  console.log("Admin Panel component rendered");

  return (
    <div>
      AdminPanel
      <button onClick={onclick}>Logout</button>
    </div>
  );
};
export default AdminPanel;
