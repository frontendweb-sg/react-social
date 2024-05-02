import Input from "@/components/ui/Input";
import AuthForm from "../../widgets/AuthForm";
import Button from "@/components/ui/Button";
import { useFormik } from "formik";
import { AppContent } from "@/utils/content";
import { object, string } from "yup";

const validation = object({
  email: string().email("Invalid email").required("Email is required!"),
});

export default function ForgotPasswordPage() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: validation,
      onSubmit(values, { resetForm }) {
        console.log("values", values);
        resetForm();
      },
    });

  return (
    <AuthForm
      title={AppContent.forgotPassword}
      subtitle={AppContent.backToLogin}
      to="/"
      linkText={AppContent.signin}
      onSubmit={handleSubmit}
    >
      <Input
        name="email"
        placeholder="Enter email"
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />

      <Button type="submit">{AppContent.forgotPassword}</Button>
    </AuthForm>
  );
}
