const AdminPanel = ({ clickHandled }) => {
  console.log("Admin Panel component rendered");

  return (
    <div>
      AdminPanel
      <button onClick={clickHandled}>Logout</button>
    </div>
  );
};
export default AdminPanel;
