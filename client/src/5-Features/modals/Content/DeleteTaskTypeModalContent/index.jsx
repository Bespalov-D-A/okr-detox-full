import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useFormik } from "formik";
import { useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../../6-Entities/common";
import { useDeleteTaskTypesModal } from "../../../../6-Entities/modals";
import { useTaskList } from "../../../../6-Entities/taskList";
import { taskService } from "../../../../7-Shared/API/taskService";
import {
  FAILED_DELETE_TYPE,
  SUCCESS_TYPE_DELETE,
} from "../../../../7-Shared/assests/Constants";
import { useLoader } from "../../../../7-Shared/hooks/useLoad";
import s from "./index.module.scss";

const DeleteTaskTypeModalContent = ({ SelectTaskType }) => {
  const setOpen = useDeleteTaskTypesModal((state) => state.setOpen);
  const setAlert = useAlert((state) => state.setAlert);
  const list = useDeleteTaskTypesModal((state) => state.list);
  const setTaskSwitcher = useTaskList((state) => state.setTaskSwitcher);
  const [switcher, setSwitcher] = useState(false);

  const [isFetch, isLoad, error] = useLoader(
    FAILED_DELETE_TYPE,
    setAlert,
    async (params) => {
      const token = reactLocalStorage.get("jwt");
      const response = await taskService.deleteTaskList(token, list.id);
      setTaskSwitcher();
      setAlert("success", SUCCESS_TYPE_DELETE);
      setOpen(false);
    }
  );

  const handleClick = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    isFetch();
  };

  const formik = useFormik({
    initialValues: {
      selectedTaskType: null,
    },
    validationSchema: null,
    onSubmit: (values) => {
      if (!values.selectedTaskType) return;
      const token = reactLocalStorage.get("jwt");
      taskService
        .deleteTaskType(token, values.selectedTaskType.id)
        .then((res) => {
          setAlert({ type: "success", msg: SUCCESS_TYPE_DELETE });
          setSwitcher(!switcher);
          setTaskSwitcher();

          formik.setFieldValue("selectedTaskType", null);
        })
        .catch((e) => {
          setAlert({ type: "error", msg: FAILED_DELETE_TYPE });
          console.log(e);
        });
    },
  });

  return (
    <div className={s.content} id="type-delete-modal-content">
      <Box onSubmit={formik.handleSubmit} component="form">
        <div>
          {SelectTaskType("selectedTaskType", formik, switcher, setSwitcher)}
        </div>
        <div className={s.desc}>Удалите ненужные типы задач</div>
        <div className={s["btn-wrap"]}>
          <Button
            id="btn-cancel-ok"
            color="primary"
            onClick={handleClick}
            variant="contained"
          >
            Закрыть
          </Button>
        </div>
      </Box>
    </div>
  );
};
export default DeleteTaskTypeModalContent;
