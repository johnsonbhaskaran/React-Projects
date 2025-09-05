import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// GET all users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data; //! createAsyncThunk returns it as action.payload
});

// POST new user
export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
  return response.data;
});

// DELETE user
export const removeUser = createAsyncThunk("users/removeUser", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  return id; //! Returns ID so we can remove from state
});

// UPDATE user
export const updateUser = createAsyncThunk("users/updateUser", async (updatedUser) => {
  const { id, ...data } = updatedUser;
  const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data);
  return response.data; //! Returns updated user
});

const usersSlice = createSlice({
  name: "users",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    // 📌 GET users
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });

    // 📌 POST users
    builder
      .addCase(addUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.loading = false;
        state.list.push(action.payload);
      })
      .addCase(addUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });

    // 📌 DELETE user
    builder
      .addCase(removeUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.loading = false;
        state.list = state.list.filter((user) => user.id !== action.payload);
      })
      .addCase(removeUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });

    // 📌 UPDATE user
    builder
      .addCase(updateUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        const index = state.list.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.list[index] = action.payload;
        state.loading = false;

        // state.list = () =>
        //   state.list.map((user) => {
        //     if (user.id !== action.payload) {
        //       user.name = action.payload.name;
        //       user.email = action.payload.email;
        //     }
        //   });
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload.error;
      });
  },
});

export default usersSlice.reducer;
