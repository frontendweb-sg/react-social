import { IUser } from "@/types";
import { ReactNode, createContext } from "react";

interface AuthState {
  loading: boolean;
  token: null | string;
  user: null | IUser;
  redirectUrl?: string;
}

export const AuthContext = createContext<AuthState | null>(null);

const initialState = {
  loading: false,
  user: null,
  token: null,
  redirectUrl: "/",
};

type ACTIONTYPE =
  | { type: "increment"; payload: number }
  | { type: "decrement"; payload: string };

function authReducer(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "increment":
      return {};
    case "decrement":
      return {};
    default:
      return state;
  }
}

export default function AuthProvider({ children }: { children: ReactNode }) {
  // const [state, dispatch] = useReducer(authReducer, initialState);
  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
}
