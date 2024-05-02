import classNames from "classnames";
import { FormikErrors, FormikTouched } from "formik";
import { CircleX, CircleCheck } from "lucide-react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  errors?: FormikErrors<{ [key: string]: string }>;
  touched?: FormikTouched<{ [key: string]: string }>;
}
export default function Input({
  name,
  label,
  errors,
  touched,
  className,
  ...rest
}: InputProps) {
  const error =
    errors?.[name as keyof typeof errors] &&
    touched?.[name as keyof typeof touched]
      ? errors[name as keyof typeof errors]
      : null;

  return (
    <div>
      {label && (
        <label className="block text-slate-600 text-sm font-medium mb-2">
          {label}
        </label>
      )}
      <div
        className={classNames(
          "ring-slate-800 hover:bg-gray-50 border border-gray-200 rounded-md relative",
          {
            "border-green-500 text-green-700 placeholder:text-green-700":
              touched?.[name as keyof typeof touched] &&
              !errors?.[name as keyof typeof errors],
            "border-red-600 text-red-500 placeholder:text-red-600":
              touched?.[name as keyof typeof touched] &&
              errors?.[name as keyof typeof errors],
          },
          className
        )}
      >
        <input
          className="text-sm font-semibold bg-transparent w-full p-3 outline-none"
          name={name}
          {...rest}
        />
        {error && (
          <CircleX
            size={16}
            className="absolute right-2 -translate-y-1/2 top-2/4"
          />
        )}
        {touched?.[name as keyof typeof touched] &&
          !errors?.[name as keyof typeof errors] && (
            <CircleCheck
              size={16}
              className="absolute right-2 -translate-y-1/2 top-2/4"
            />
          )}
      </div>
      {error && <div className="text-rose-600 text-xs mt-2">{error}</div>}
    </div>
  );
}
