import AuthProvider from "@/modules/auth/context/auth";
import { ReactNode, createContext } from "react";

export const AppContext = createContext({});

export default function AppProvider({ children }: { children: ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
