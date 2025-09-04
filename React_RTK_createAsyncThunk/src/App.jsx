import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "./features/users/usersSlice.js";

function App() {
  const { list, loading, error } = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div className='bg-slate-950 p-6 text-white dvh-screen'>
      <h1 className='mb-6 text-3xl'>Users</h1>

      {loading && <p className='text-blue-500'>Loading...</p>}
      {error && <p className='text-red-500'>Error: {error}</p>}

      <ul className='space-y-3'>
        {list.map((user) => (
          <li key={user.id} className='p-2 border rounded'>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
