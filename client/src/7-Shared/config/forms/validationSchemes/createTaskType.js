import { object, string } from "yup";
import { maxFunc, REQUIRED, UNCORRECT_DATA } from "../../../assests/Constants";

export const createTaskTypeValidationSchema = object({
  title: string().required(REQUIRED).max(60, maxFunc(60)),
});
