import { object, string } from "yup";

export const recoveryValidationSchema = object({
  email: string()
    .required("Введите ваш email")
    .email("Некорректный email")
    .max(60, "Не больше 60 символов"),
});
