import classNames from "classnames";

interface ContainerProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

export default function Container({
  children,
  className,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={classNames("max-w-[1024px] px-4 mx-auto", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
