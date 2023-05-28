import { object, string } from "yup";
import { maxFunc, REQUIRED, UNCORRECT_DATA } from "../../../assests/Constants";

export const authValidationSchema = object({
  authLogin: string()
    .required(REQUIRED)
    .max(60, maxFunc(60))
    .email(UNCORRECT_DATA),
  authPassword: string().required(REQUIRED).max(60, maxFunc(60)),
});
