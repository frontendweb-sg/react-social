import { Api } from "@/axios-instance";
import type { IAuth, AuthResponse, UserSign, AuthState } from "../types";
import { ReactNode, createContext, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext<IAuth | null>(null);

const initialState = {
  loading: false,
  user: null,
  token: null,
  redirectUrl: "/",
};

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>(initialState);

  const login = async (request: UserSign) => {
    try {
      setState((prev) => ({ ...prev, loading: true }));
      const response = await Api.post<AuthResponse>("/auth", request);
      const {
        data: { accessToken, user },
      } = response;
      setState((prev) => ({
        ...prev,
        loading: false,
        user,
        token: accessToken,
      }));
      return accessToken;
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }
  };

  const register = async () => {};
  const logout = () => {};
  const checkUserIsLoggedin = () => {};

  return (
    <AuthContext.Provider
      value={{ state, login, register, logout, checkUserIsLoggedin }}
    >
      {children}
    </AuthContext.Provider>
  );
}
