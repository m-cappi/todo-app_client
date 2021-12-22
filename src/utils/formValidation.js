import * as yup from "yup";

const emailRule = yup
  .string()
  .email("Invalid email")
  .required("Email is required!");

const passwordRule = yup
  .string()
  .min(6, "Too short!")
  .max(30, "Too long!")
  .required("Password is required!");

const confirmationPasswordRule = (match) =>
  yup
    .string()
    .required("Password confirmation is required!")
    .oneOf([yup.ref(match), null], "Passwords must match");

const taskRule = yup
  .string()
  .required('You need a task!')
  .min(2, 'Too short!')
  .max(50, 'Too long! (max 50 char)');

export const RegisterSchema = yup.object().shape({
  email: emailRule,
  password: passwordRule,
  confirmPassword: confirmationPasswordRule("password")
});

export const LoginSchema = yup
  .object()
  .shape({ email: emailRule, password: passwordRule });

// export const UpdatePasswordSchema = yup.object().shape({
//   password: passwordRule,
//   newPassword: passwordRule,
//   newConfirmationPassword: confirmationPasswordRule('newPassword'),
// });

export const NewTaskSchema = yup.object().shape({summary: taskRule});
