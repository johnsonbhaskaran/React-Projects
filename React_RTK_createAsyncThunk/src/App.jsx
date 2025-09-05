import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { addUser, fetchUsers, removeUser, updateUser } from "./features/users/usersSlice.js";

function App() {
  const { list, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const handleAddOrUpdateUser = () => {
    if (!name || !email) return;
    if (editId) {
      dispatch(updateUser({ id: editId, name, email }));
      setEditId(null);
    } else {
      dispatch(addUser({ name, email }));
    }
    setName("");
    setEmail("");
  };

  const handleRemoveUser = (id) => {
    dispatch(removeUser(id));
  };

  const handleEditUser = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditId(user.id);
  };

  return (
    <div className='bg-slate-950 p-6 text-white/50 dvh-screen'>
      <div className='flex'>
        <h1 className='mr-6 mb-6 text-3xl'>Users</h1>

        {loading && <p className='text-blue-500'>Loading...</p>}
        {error && <p className='text-red-500'>Error: {error}</p>}
      </div>

      <div className='space-x-4 bg-slate-900 mb-6 p-5 border border-slate-700 rounded'>
        <input
          onChange={(e) => setName(e.target.value)}
          type='text'
          value={name}
          placeholder='enter name'
          className='p-2 border border-slate-700 focus:outline-none'
        />
        <input
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          value={email}
          placeholder='enter email'
          className='p-2 border border-slate-700 focus:outline-none'
        />
        <button
          onClick={handleAddOrUpdateUser}
          className='hover:bg-white/70 px-5 py-2 border rounded-full hover:text-slate-950 transition-all duration-300 cursor-pointer'
        >
          {!editId ? `Add User ➕` : `Update User ✏️`}
        </button>
      </div>

      <ul className='space-y-3'>
        {list.map((user) => (
          <li key={user.id} className='flex justify-between p-2 border rounded'>
            <span>
              {user.name} ({user.email})
            </span>
            <div className='space-x-2'>
              <button
                onClick={() => {
                  handleEditUser(user);
                }}
                className='hover:bg-emerald-600 px-2 border rounded-full cursor-pointer'
              >
                ✅
              </button>
              <button
                onClick={() => {
                  handleRemoveUser(user.id);
                }}
                className='hover:bg-red-600 px-2 border rounded-full cursor-pointer'
              >
                ❌
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
