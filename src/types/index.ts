export type Color =
  | "primary"
  | "secondary"
  | "info"
  | "warning"
  | "danger"
  | "success";

export type Size = "xs" | "sm" | "md" | "lg" | "xl" | "full";
export type IUser = {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  mobile: string;
  role: string;
  emailVerify: boolean;
  provider?: string;
  provider_id?: string;
};

export type UserSign = {
  email: string;
  password: string;
};
