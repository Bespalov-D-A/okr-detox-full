import { object, string } from "yup";
import { maxFunc, REQUIRED, UNCORRECT_DATA } from "../../../assests/Constants";

export const addTaskValidationSchema = object({
  selectedTaskList: object().required(REQUIRED),
});
