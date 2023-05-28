import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import s from "./index.module.scss";
import { useEffect, useRef, useState } from "react";
import { useAlert, useCommon } from "../../../6-Entities/common";
import { useNavigate } from "react-router-dom";
import StepperUI from "../../../7-Shared/ui/StepperUI";
import { addTaskValidationSchema } from "../../../7-Shared/config/forms/validationSchemes/addTask";
import CanvasPreloader from "../../../7-Shared/ui/CanvasPreloader";
import { reactLocalStorage } from "reactjs-localstorage";
import { taskService } from "../../../7-Shared/API/taskService";
import {
  FAILED_CREATE_TASK,
  SUCCESS_TASK_CREATE,
} from "../../../7-Shared/assests/Constants";
import { useAddTaskModal } from "../../../6-Entities/modals";
import { useTaskList } from "../../../6-Entities/taskList";
import CustomScrollBar from "../../../7-Shared/ui/CustomScrollBar";

const AddTaskForm = ({
  children,
  captchaFunc,
  AddTaskListForm,
  AddTaskTypeForm,
  CreateTaskListForm,
  CreateTaskTypeForm,
  CreateTaskTaskForm,
}) => {
  const setFormBtnDisabled = useCommon((state) => state.setFormBtnDisabled);
  const setTaskSwitcher = useTaskList((state) => state.setTaskSwitcher);
  const setAlert = useAlert((state) => state.setAlert);
  const navigate = useNavigate();
  const setOpen = useAddTaskModal((state) => state.setOpen);
  const [activeStep, setActiveStep] = useState(0);
  const steps = ["Лист", "Тип", "Задача"];
  const [createTaskListFormIsOpen, setCreateTaskListFormIsOpen] =
    useState(false);
  const [createTaskTypeFormIsOpen, setCreateTaskTypeFormIsOpen] =
    useState(false);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    //Делаем кнопку submit неактивным
    setFormBtnDisabled(true);
  }, []);

  const handleSubmit = (e) => {
    if (activeStep < 2) {
      e.preventDefault()
setActiveStep((prev) => prev + 1);
    } else formik.submitForm();
  };

  const formik = useFormik({
    initialValues: {
      selectedTaskList: null,
      selectedTaskType: null,
      taskTitle: "",
      taskDescription: "",
      time: null,
      date: null,
    },
    validationSchema: addTaskValidationSchema,
    onSubmit: (values) => {
      const token = reactLocalStorage.get("jwt");
      setIsLoad(true);
      taskService
        .createTask(token, values)
        .then((res) => {
          setOpen(false);
          setAlert({ type: "success", msg: SUCCESS_TASK_CREATE });
          setTaskSwitcher();
        })
        .catch((e) => {
          setAlert({ type: "error", msg: FAILED_CREATE_TASK });
          console.log(e);
        })
        .finally(() => setIsLoad(false));
    },
  });

  return (
    <div className={s.wrap}>
      <CanvasPreloader isLoad={isLoad} />

      <StepperUI activeStep={activeStep} steps={steps} />
      <div className={s["scroll-wrap"]}>
        <CustomScrollBar>
          <Box
            className={s["form"]}
            component="form"
            id="add_task_form"
            noValidate
            autoComplete="off"
            onSubmit={formik.handleSubmit}
          >
            {activeStep === 0 &&
              AddTaskListForm(
                "selectedTaskList",
                formik,
                createTaskListFormIsOpen,
                setCreateTaskListFormIsOpen
              )}
            {activeStep === 1 &&
              AddTaskTypeForm(
                "selectedTaskType",
                formik,
                createTaskTypeFormIsOpen,
                setCreateTaskTypeFormIsOpen
              )}
            {activeStep === 2 && CreateTaskTaskForm(formik)}
            </Box>
          {createTaskListFormIsOpen &&
              activeStep === 0 &&
              CreateTaskListForm(setCreateTaskListFormIsOpen)}
            {createTaskTypeFormIsOpen &&
              activeStep === 1 &&
              CreateTaskTypeForm(setCreateTaskTypeFormIsOpen)}

        </CustomScrollBar>
      </div>
      <div className={s["btn-wrap"]}>
        {activeStep > 0 && (
          <Button
            id="btn-go-auth"
            onClick={() => setActiveStep((prev) => prev - 1)}
            disabled={!formik.values.selectedTaskList}
            type="submit"
            variant="contained"
          >
            Назад
          </Button>
        )}
        <Button
          id="btn-go-auth"
          onClick={(e)=>handleSubmit(e)}
          disabled={!formik.values.selectedTaskList}
          type="submit"
          variant="contained"
        >
          Далее
        </Button>
      </div>
    </div>
  );
};

export default AddTaskForm;
