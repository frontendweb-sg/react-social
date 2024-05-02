import { Link } from "react-router-dom";
import { Waypoints } from "lucide-react";
import type { LinkProps } from "react-router-dom";
import classNames from "classnames";

interface LogoProps
  extends React.HtmlHTMLAttributes<HTMLAnchorElement>,
    Omit<LinkProps, "to"> {
  type?: "light" | "dark";
  to?: string | URL;
}

export default function Logo({
  type = "light",
  children,
  to = "/",
  ...rest
}: LogoProps) {
  return (
    <Link
      to={to}
      className={classNames(
        "font-bold flex items-center space-x-1",
        type === "light" ? "text-white" : "text-slate-900"
      )}
      {...rest}
    >
      <Waypoints className="mr-2 text-rose-500" />
      {children ?? "React Social"}
    </Link>
  );
}
