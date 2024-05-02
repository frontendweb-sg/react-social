import Input from "@/components/ui/Input";
import AuthForm from "../../widgets/AuthForm";
import { useFormik } from "formik";
import { AppContent } from "@/utils/content";
import { object, string } from "yup";
import Button from "@/components/ui/Button";
const validation = object({
  firstname: string().required("First name is required"),
  lastname: string().required("Last name is required"),
  email: string().email("Invalid email").required("Email is required!"),
  password: string().required("Password is required"),
  mobile: string().min(10).max(10).required("Mobile is required"),
});

export default function SignupPage() {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: {
        firstname: "",
        lastname: "",
        email: "",
        password: "",
        mobile: "",
      },
      validationSchema: validation,
      onSubmit(values, { resetForm }) {
        console.log("values", values);
        resetForm();
      },
    });

  return (
    <AuthForm
      title={AppContent.signup}
      subtitle={AppContent.signinSubtitle}
      to="/"
      linkText={AppContent.signin}
      onSubmit={handleSubmit}
    >
      <div className="grid grid-cols-2 gap-4">
        <Input
          name="firstname"
          placeholder="Enter firstname"
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.firstname}
        />
        <Input
          name="lastname"
          placeholder="Enter lastname"
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.lastname}
        />
      </div>
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
      <Input
        name="mobile"
        placeholder="Mobile"
        errors={errors}
        touched={touched}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.mobile}
      />
      <Button type="submit">{AppContent.signup}</Button>
    </AuthForm>
  );
}
