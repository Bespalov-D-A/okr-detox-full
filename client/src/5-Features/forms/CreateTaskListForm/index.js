import MoreTimeIcon from "@mui/icons-material/MoreTime";
import date from "date-and-time";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import CheckIcon from "@mui/icons-material/Check";
import { createTaskListFields } from "../../../6-Entities/fields/CreateTaskListFields";
import { createTaskListValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/createTaskList";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import s from "./index.module.scss";
import IconButton from "@mui/material/IconButton";
import { taskService } from "../../../7-Shared/API/taskService";
import Box from "@mui/material/Box";
import { useFormik } from "formik";
import { reactLocalStorage } from "reactjs-localstorage";
import { useState } from "react";
import { useAlert } from "../../../6-Entities/common";
import {
  FAILED_CREATE_TASK_LIST,
  TITLE_FROM_DATETIME_LIST,
} from "../../../7-Shared/assests/Constants";

const CreateTaskListForm = ({ DateTime, closeCreateForm }) => {
  const [addTime, setAddTime] = useState(false);
  const [listDate, setListDate] = useState(null);
  const [listTime, setListTime] = useState(null);
  const setAlert = useAlert((state) => state.setAlert);

  const formik = useFormik({
    initialValues: {
      title: "",
      date: "",
      time: "",
    },
    validationSchema: createTaskListValidationSchema,
    onSubmit: (values) => {
      const token = reactLocalStorage.get("jwt");
      const newValues = {
        ...values,
        date: listDate ? date.format(new Date(listDate), "DD.MM.YYYY") : null,
        time: listTime ? date.format(new Date(listTime), "HH:mm") : null,
      };
      taskService
        .createTaskList(token, newValues)
        .then((res) => {
          closeCreateForm(false);
        })
        .catch((e) => {
          console.log(e);
          setAlert({ type: "error", FAILED_CREATE_TASK_LIST });
        });
    },
  });

  const handleTime = () => {
    if (!addTime) {
      setListDate(new Date());
      setListTime(new Date());
    } else {
      setListDate(null);
      setListTime(null);
    }
    setAddTime(!addTime);
  };

  const title = TITLE_FROM_DATETIME_LIST;

  return (
    <div>
      <Box
        className={s.wrap}
        id="create-task-form"
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={
          e=>{
e.preventDefault()
formik.handleSubmit()

        }        }
      >
        {addTime &&
          DateTime(title, listTime, setListTime, listDate, setListDate)}
        <div className={s["fields"]}>
          {createTaskListFields.map((field) => (
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
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="label"
            onClick={handleTime}
          >
            {addTime ? <AlarmOffIcon color="error" /> : <MoreTimeIcon />}
          </IconButton>

          <IconButton className={s.ok} color="primary" type="submit">
            <CheckIcon />
          </IconButton>
        </div>
      </Box>
    </div>
  );
};

export default CreateTaskListForm;
