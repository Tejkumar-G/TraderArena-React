import * as Yup from "yup";

export const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const SignupSchema = Yup.object().shape({
  first_name: Yup.string().required("First name required"),
  last_name: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string()
    .min(6, "Password should contain at least 6 character")
    .max(25, "Password should be less than 25 character")
    .required("Password is required"),
});

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password should contain at least 6 character")
    .max(25, "Password should be less than 25 character")
    .required("Password is required"),
});


