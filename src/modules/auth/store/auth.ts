import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { IUser, UserSign } from "@/types";
import { toast } from "react-toastify";
import { Api } from "@/axios-instance";

interface Response {
  accessToken: string;
  expireIn: number;
  user: IUser;
}

// login
export const login = createAsyncThunk(
  "auth/login",
  async (payload: UserSign) => {
    try {
      const { data } = await Api.post<Response>("/auth", payload);
      return data.user;
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
    return null;
  }
);

interface AuthState {
  status: "idle" | "pending" | "loading" | "success";
  user: null | IUser;
  accessToken: string | null;
}

const initialState: AuthState = {
  status: "idle",
  user: null,
  accessToken: null,
};

/**
 * Auth slide
 */
const authSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state: AuthState) => {
      state.user = null;
      state.accessToken = null;
      localStorage.removeItem("user");
      localStorage.removeItem("expireTime");
      localStorage.removeItem("token");
    },
    checkUserIsLoggedIn: (state: AuthState) => {
      const user = JSON.parse(localStorage.getItem("user") as string) as IUser;
      const expireTime = localStorage.getItem("expireTime");
    },
  },
  extraReducers(builder) {
    builder
      .addCase(login.pending, (state) => {
        state.status = "loading";
      })
      .addCase(
        login.fulfilled,
        (state, action: PayloadAction<IUser | null>) => {
          state.status = "success";
          state.user = action.payload!;
        }
      );
  },
});

export const {} = authSlide.actions;
export default authSlide.reducer;
