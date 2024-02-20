import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../../Helper/Helper";
import { toast } from "react-toastify";

export const login = createAsyncThunk("/user/signin", async (formData) => {
  try {
    const res = await axiosInstance.post(`/user/signin/`, formData);
    const resData = res.data;
    return resData;
  } catch (error) {
    throw error;
  }
});

export const signup = createAsyncThunk("/user/signup", async (formData) => {
  try {
    const res = await axiosInstance.post(`/user/signup/`, formData);
    const resData = res?.data;
    return resData;
  } catch (error) {
    throw error;
  }
});

export const profileDetails = createAsyncThunk(
  "/user/profile-details",
  async () => {
    try {
      const res = await axiosInstance.get(`/user/profile-details`);
      const resData = res?.data;
      return resData;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  status: "",
  error: null,
  token: null,
  user: [],
  redirect: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset_redirectToUpdate: (state, { payload }) => {
      state.redirect = payload;
    },
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.removeItem("profile_pic");
      localStorage.removeItem("email");
      toast.success("Logout Successfully");
    },
    newRegister: (state) => {
      localStorage.removeItem("username");
    },
  },

  extraReducers: (builder) => {
    builder
      //* Login
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        if (payload.status === 200) {
          state.redirect = "/";
          localStorage.setItem("token", payload?.token);
          localStorage.setItem("profile_pic", payload?.data.profile_pic);
          localStorage.setItem("email", payload?.data.email);
          toast.success(payload?.message);
        } else if (payload.status === 201) {
          toast.error(payload?.message);
        }
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.status = "failed";
        console.log(payload?.message);
        state.error = payload?.message;
        toast.error(payload?.message);
      })

      //* Signup

      .addCase(signup.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signup.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.redirect = "/login";
        if (payload.status === 200) {
          localStorage.setItem("username", payload?.data.first_name);
          toast.success(payload?.message);
        } else if (payload.status === 201) {
          toast.error(payload?.message);
        }
      })
      .addCase(signup.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload.message;
        toast.error(action.payload.message);
      })

      //* profileDetails
      .addCase(profileDetails.pending, (state) => {
        state.status = "loading";
      })
      .addCase(profileDetails.fulfilled, (state, { payload }) => {
        state.status = "succeeded";
        state.user = payload.data;
      })
      .addCase(profileDetails.rejected, (state, { payload }) => {
        state.status = "failed";
        state.error = payload?.message;
        toast.error(payload?.message);
      });
  },
});

export const { reset_redirectToUpdate, logout, newRegister } =
  AuthSlice.actions;

export default AuthSlice.reducer;
