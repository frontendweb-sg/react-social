import { AppContent } from "@/utils/content";
import classNames from "classnames";
import { Link, LinkProps } from "react-router-dom";

interface AuthFormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  title?: string;
  subtitle?: string;
  linkText?: string;
  to?: string | URL;
  linkProps?: LinkProps;
}
export default function AuthForm({
  children,
  className,
  title = AppContent.signin,
  subtitle = AppContent.signinSubtitle,
  linkText = AppContent.signup,
  to = "/signup",
  linkProps,
  ...rest
}: AuthFormProps) {
  return (
    <div className="px-6 py-12 shadow-md min-h-96 max-w-[360px] min-w-[360px] bg-white rounded-md">
      <form noValidate className={classNames("space-y-4", className)} {...rest}>
        <div className="mb-10">
          <h2 className="text-[24px] font-medium">{title}</h2>
          <p className="text-xs text-slate-400">
            {subtitle}
            <Link
              className="text-rose-600 font-medium hover:text-purple-800 ml-1"
              to={to!}
              {...linkProps}
            >
              {linkText}
            </Link>
          </p>
        </div>
        {children}
      </form>
    </div>
  );
}
