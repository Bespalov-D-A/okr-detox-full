import CheckIcon from "@mui/icons-material/Check";
import MoreTimeIcon from "@mui/icons-material/MoreTime";
import AlarmOffIcon from "@mui/icons-material/AlarmOff";
import DefaultField from "../../../7-Shared/ui/Fields/Default";
import s from "./index.module.scss";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { TITLE_FROM_DATETIME_TASK } from "../../../7-Shared/assests/Constants";
import { createTaskTaskFields } from "../../../6-Entities/fields/CreateTaskTaskFields";
import { useEffect, useState } from "react";
import date from "date-and-time";

const CreateTaskTaskForm = ({ formik, DateTime }) => {
  const [addTime, setAddTime] = useState(false);
  const [taskDate, setTaskDate] = useState(new Date());
  const [taskTime, setTaskTime] = useState(new Date());

  useEffect(() => {
    if (taskDate && taskTime && addTime) {
      const formTime = date.format(new Date(taskTime), "HH:mm");
      const formDate = date.format(new Date(taskDate), "DD.MM.YY");
      formik.setFieldValue("time", String(formTime));
      formik.setFieldValue("date", String(formDate));
    }
  }, [taskDate, taskTime]);

  const title = TITLE_FROM_DATETIME_TASK;

  return (
    <div>
      <Box className={s.wrap} id="create-task-type-form">
        {createTaskTaskFields.map((field, index) => (
          <div key={field.name} className={s["fields"]}>
            <DefaultField
              name={field.name}
              label={field.label}
              multiline={field.multiline}
              fieldtype={field.fieldType}
              setFieldTouched={formik.setFieldTouched}
              value={formik.values[field.name]}
              onChange={formik.handleChange}
              touched={formik.touched[field.name]}
              errors={formik.errors}
            />
            {index === 0 && (
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                onClick={() => setAddTime(!addTime)}
              >
                {addTime ? <AlarmOffIcon color="error" /> : <MoreTimeIcon />}
              </IconButton>
            )}
          </div>
        ))}
        {addTime &&
          DateTime(title, taskTime, setTaskTime, taskDate, setTaskDate)}
      </Box>
    </div>
  );
};

export default CreateTaskTaskForm;
