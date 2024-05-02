import Input from "@/components/ui/Input";
import AuthForm from "../../widgets/AuthForm";
import Button from "@/components/ui/Button";
import { useFormik } from "formik";
import { AppContent } from "@/utils/content";
import { object, string } from "yup";
import { Link } from "react-router-dom";
import { login } from "../../store/auth";
import { useAppDispatch } from "@/hook";

const validation = object({
  email: string().email("Invalid email").required("Email is required!"),
  password: string().required("Password is required"),
});

export default function SigninPage() {
  const dispatch = useAppDispatch();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validation,
      onSubmit(values, { resetForm }) {
        dispatch(login(values));
        resetForm();
      },
    });

  return (
    <AuthForm onSubmit={handleSubmit}>
      <Input
        name="email"
        placeholder="Enter email"
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      <Input
        name="password"
        placeholder="*********"
        type="password"
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      <div className="flex items-center justify-between text-xs">
        <label className="py-2 space-x-2 block">
          <input type="checkbox" /> <span>{AppContent.rememberMe}</span>
        </label>
        <Link
          to="/forgot-password"
          className="text-rose-600 flex items-center font-medium"
        >
          {AppContent.forgotPassword}
        </Link>
      </div>
      <Button type="submit">{AppContent.signin}</Button>
    </AuthForm>
  );
}
