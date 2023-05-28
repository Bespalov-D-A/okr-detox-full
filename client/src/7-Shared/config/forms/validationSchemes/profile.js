import { object, string } from "yup";
import {
  maxFunc,
  ONLY_CHARTS_AND_NUMBERS,
  ONLY_NUMBERS,
  REQUIRED,
} from "../../../assests/Constants";

export const profileValidationSchema = object({
  name: string()
    //.required(REQUIRED)
    .max(60, maxFunc(60))
    .matches(/^[a-zA-ZА-Яа-я0-9]+/gm, ONLY_CHARTS_AND_NUMBERS),
  lastName: string()
    .max(60, maxFunc(60))
    .matches(/^[a-zA-ZА-Яа-я0-9]+/gm, ONLY_CHARTS_AND_NUMBERS),
  middleName: string()
    .max(60, maxFunc(60))
    .matches(/^[a-zA-ZА-Яа-я0-9]+/gm, ONLY_CHARTS_AND_NUMBERS),
  birthday: string().max(60, maxFunc(60)),
  email: string().max(60, maxFunc(60)).email("Некорректная почта"),
  country: string()
    .max(60, maxFunc(60))
    .matches(/^[a-zA-ZА-Яа-я0-9]+/gm, ONLY_CHARTS_AND_NUMBERS),
  city: string()
    .max(60, maxFunc(60))
    .matches(/^[a-zA-ZА-Яа-я0-9]+/gm, ONLY_CHARTS_AND_NUMBERS),
  phone: string()
    .max(20, maxFunc(20))
    .matches(/^[0-9]+/gm, ONLY_NUMBERS),
  status: string()
    .max(120, maxFunc(120))
    .matches(/^[a-zA-ZА-Яа-я0-9]+/gm, ONLY_CHARTS_AND_NUMBERS),
  password: string().max(60, maxFunc(60)),
  confirm_password: string().max(60, maxFunc(60)),
});
