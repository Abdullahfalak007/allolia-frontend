// src/redux/authSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Define the initial state of authentication
interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  loading: false,
  error: null,
};

// Async thunk to handle login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (email === "test@example.com" && password === "password") {
        return "mock-jwt-token";
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

// Async thunk to handle registration
export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (email && password) {
        return "mock-register-success";
      } else {
        throw new Error("Please fill in all fields");
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

// Async thunk to handle forgot password
export const forgotPassword = createAsyncThunk(
  "auth/forgotPassword",
  async ({ email }: { email: string }, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (email) {
        return "mock-forgot-success";
      } else {
        throw new Error("Please enter your email");
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

// Async thunk to handle reset password
export const resetPassword = createAsyncThunk(
  "auth/resetPassword",
  async (
    {
      newPassword,
      confirmPassword,
    }: { newPassword: string; confirmPassword: string },
    { rejectWithValue }
  ) => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (newPassword && confirmPassword && newPassword === confirmPassword) {
        return "mock-reset-success";
      } else {
        throw new Error("Passwords do not match");
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

// Async thunk to handle OTP verification
export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async ({ otp }: { otp: string }, { rejectWithValue }) => {
    try {
      // Mock API call
      await new Promise((resolve) => setTimeout(resolve, 800));
      if (otp === "123456") {
        return "mock-otp-success";
      } else {
        throw new Error("Invalid OTP");
      }
    } catch (error: any) {
      return rejectWithValue(error.message || "An error occurred");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.token = action.payload;
        state.loading = false;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // Register
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // Forgot Password
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(forgotPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // Reset Password
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
      })
      .addCase(resetPassword.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      })

      // OTP
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.error = action.payload as string;
        state.loading = false;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
