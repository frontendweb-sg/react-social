import classNames from "classnames";

type FormGroupProps = React.HTMLAttributes<HTMLDivElement> & {
  label?: string;
  labelFor?: string;
  labelProps?: React.LabelHTMLAttributes<HTMLLabelElement>;
};

export default function FormGroup({
  label,
  labelFor,
  children,
  className,
  labelProps,
  ...rest
}: FormGroupProps) {
  return (
    <div className={classNames("relative", className)} {...rest}>
      {label && (
        <label
          className={classNames(labelProps?.className)}
          htmlFor={labelFor}
          {...labelProps}
        >
          {label}
        </label>
      )}
      {children}
    </div>
  );
}
