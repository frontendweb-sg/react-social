import { Color, Size } from "@/types";
import classNames from "classnames";
import { LoaderIcon } from "lucide-react";
import { memo } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: Color;
  size?: Size;
  loading?: boolean;
}
function Button({
  loading,
  color = "primary",
  size = "full",
  children,
  className,
  type = "button",
  ...rest
}: ButtonProps) {
  console.log("Button");
  return (
    <button
      className={classNames("btn", {
        ["btn-" + color]: color,
        ["btn-" + size]: size,
      })}
      type={type}
      {...rest}
    >
      {loading && <LoaderIcon className="spin" />} {children}
    </button>
  );
}

export default memo(Button);
