import { Color, Size } from "@/types";
import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
}
export default function Button({
  color = "primary",
  size = "full",
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  return (
    <button
      className={classNames("btn", {
        ["btn-" + color]: color,
        ["btn-" + size]: size,
      })}
      type={type}
      {...rest}
    >
      {children}
    </button>
  );
}
