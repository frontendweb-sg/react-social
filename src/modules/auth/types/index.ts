import { IUser } from "@/types";

export type UserSign = {
  email: string;
  password: string;
};

export type AuthResponse = {
  accessToken: string;
  expireIn: number;
  user: IUser;
};

export interface IAuth {
  state: AuthState;
  login: (request: UserSign) => void;
  register: () => void;
  logout: () => void;
  checkUserIsLoggedin: () => void;
}

export interface AuthState {
  loading: boolean;
  token: null | string;
  user: null | IUser;
  redirectUrl?: string;
}
