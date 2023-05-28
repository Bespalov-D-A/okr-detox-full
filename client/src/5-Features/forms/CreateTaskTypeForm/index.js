import CheckIcon from "@mui/icons-material/Check";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import s from "./index.module.scss";
import IconButton from "@mui/material/IconButton";
import { taskService } from "../../../7-Shared/API/taskService";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { FAILED_CREATE_TASK_TYPE } from "../../../7-Shared/assests/Constants";
import { createTaskTypeValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/createTaskType";
import { createTaskTypeFields } from "../../../6-Entities/fields/CreateTaskTypeFields";

const CreateTaskTypeForm = ({ closeCreateForm }) => {
  const setAlert = useAlert((state) => state.setAlert);

  const formik = useFormik({
    initialValues: {
      title: "",
    },
    validationSchema: createTaskTypeValidationSchema,
    onSubmit: (values) => {
      const token = reactLocalStorage.get("jwt");
      taskService
        .createTaskType(token, values)
        .then((res) => {
          closeCreateForm(false);
        })
        .catch((e) => {
          console.log(e);
          setAlert({ type: "error", FAILED_CREATE_TASK_TYPE });
        });
    },
  });

  return (
    <div>
      <Box
        className={s.wrap}
        id="create-task-type-form"
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={formik.handleSubmit}
      >
        <div className={s["fields"]}>
          {createTaskTypeFields.map((field) => (
            <DefaultField
              key={field.name}
              name={field.name}
              label={field.label}
              fieldtype={field.fieldType}
              setFieldTouched={formik.setFieldTouched}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              touched={formik.touched[field.name]}
              errors={formik.errors}
            />
          ))}
          <IconButton className={s.ok} color="primary" type="submit">
            <CheckIcon />
          </IconButton>
        </div>
      </Box>
    </div>
  );
};

export default CreateTaskTypeForm;
