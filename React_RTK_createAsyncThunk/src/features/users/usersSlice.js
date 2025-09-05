import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 📌 GET all users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get("https://jsonplaceholder.typicode.com/users");
  return response.data;
});

// 📌 POST new user
export const addUser = createAsyncThunk("users/addUser", async (newUser) => {
  const response = await axios.post("https://jsonplaceholder.typicode.com/users", newUser);
  return response.data;
});

// 📌 DELETE user
export const deleteUser = createAsyncThunk("users/deleteUser", async (id) => {
  await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
  return id;
});
// 📌 UPDATE user
export const updateUser = createAsyncThunk("users/updateUser", async (updatedUser) => {
  const { id, ...data } = updatedUser;
  const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`, data);
  return response.data;
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
    // GET Users
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });

    // POST new user
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.list.push(action.payload);
    });

    // DELETE user
    builder.addCase(deleteUser.fulfilled, (state, action) => {
      state.list = state.list.filter((user) => user.id !== action.payload);
    });

    //UPDATE user
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const index = state.list.findIndex((user) => user.id === action.payload.id);
      state.list[index] = action.payload;
    });
  },
});

export default usersSlice.reducer;
