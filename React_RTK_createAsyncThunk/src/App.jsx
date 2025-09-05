import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { fetchUsers, addUser, deleteUser, updateUser } from "./features/users/usersSlice.js";

function App() {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.users);

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

  const handleDeleteUser = (id) => {
    dispatch(deleteUser(id));
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
        {error && <p className='text-red-600'>Error: {error} </p>}
      </div>

      <div className='space-x-4 bg-slate-900 mb-6 p-5 border border-slate-700 rounded'>
        <input
          type='text'
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder='Enter name'
          className='p-2 border border-slate-700 focus:outline-none'
        />
        <input
          type='email'
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder='Enter email'
          className='p-2 border border-slate-700 focus:outline-none'
        />
        <button
          onClick={handleAddOrUpdateUser}
          className='hover:bg-white/70 p-2 px-5 border rounded-full hover:text-slate-950 cursor-pointer'
        >
          {editId ? `Update User ✏️` : `Add User ➕`}
        </button>
      </div>

      <ul className='space-y-4'>
        {list.map((user) => (
          <li key={user.id + user.email} className='hover:bg-white/10 p-2 border rounded'>
            <div className='flex justify-between'>
              <span>
                {user.name} ({user.email})
              </span>
              <div className='flex space-x-2'>
                <button
                  onClick={() => handleEditUser(user)}
                  className='hover:bg-amber-300 px-2 border rounded-full cursor-pointer'
                >
                  ✅
                </button>
                <button
                  onClick={() => handleDeleteUser(user.id)}
                  className='hover:bg-amber-300 px-2 border rounded-full cursor-pointer'
                >
                  ❌
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
