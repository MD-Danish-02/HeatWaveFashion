import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const userFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

// chech for existing guestId in the local storage
const initialGuestId =
  localStorage.getItem("guestId") || `guest_${new Date().getTime()}`;
localStorage.setItem("guestId", initialGuestId);

const initialState = {
  isAuthenticated: !!userFromStorage,
  user: userFromStorage,
  loading: false,
  error: null,
  guestId: initialGuestId,
};

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/users/login`,
        userData
      );
      localStorage.setItem("userInfo", JSON.stringify(response.data.user));
      localStorage.setItem("userToken", response.data.token);
      return response.data.user;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data
          ? error.response.data
          : { message: error.message || "Something went wrong" }
      );
    }
  }
);

export const registerUser = createAsyncThunk(
  "user/register",
  async (userData, thunkAPI) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/register",
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      return response.data.user;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
);

// Thunk for processing Google login response
export const processGoogleLogin = createAsyncThunk(
  "auth/googleLogin",
  async (dataFromBackend, { rejectWithValue }) => {
    try {
      localStorage.setItem("userInfo", JSON.stringify(dataFromBackend.user));
      localStorage.setItem("userToken", dataFromBackend.token);
      return dataFromBackend.user;
    } catch (error) {
      return rejectWithValue({ message: "Failed to log in with Google data." });
    }
  }
);

const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.guestId = `guest_${new Date().getTime()}`;
      localStorage.removeItem("userInfo");
      localStorage.removeItem("userToken");
      localStorage.setItem("guestId", state.guestId);
    },
    generateNewGuestId: (state) => {
      state.guestId = `guest_${new Date().getTime()}`;
      localStorage.setItem("guestId", state.guestId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Login failed.";
      })
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
        localStorage.setItem("userInfo", JSON.stringify(action.payload));
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Registration failed.";
      })
      // Handle the processGoogleLogin thunk
      .addCase(processGoogleLogin.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(processGoogleLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(processGoogleLogin.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Google login failed.";
      });
  },
});

export const { logout, generateNewGuestId } = userSlice.actions;
export default userSlice.reducer;