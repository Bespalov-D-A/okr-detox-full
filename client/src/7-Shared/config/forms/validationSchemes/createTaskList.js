import { object, string } from "yup";
import { maxFunc, REQUIRED, UNCORRECT_DATA } from "../../../assests/Constants";

export const createTaskListValidationSchema = object({
  title: string().required(REQUIRED).max(60, maxFunc(60)),
  date: string().max(60, maxFunc(60)),
  time: string().max(60, maxFunc(60)),
});
