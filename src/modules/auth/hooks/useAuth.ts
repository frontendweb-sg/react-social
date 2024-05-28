import { useContext } from "react";
import { AuthContext } from "../context/auth";
import { IAuth } from "../types";

export default function useAuth() {
  const context = useContext<IAuth | null>(AuthContext);
  if (!context) {
    throw new Error("Context can be empty");
  }
  return context;
}
