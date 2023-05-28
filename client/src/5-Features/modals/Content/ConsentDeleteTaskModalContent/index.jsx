import Button from "@mui/material/Button";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../../6-Entities/common";
import {
  useDeleteTaskModal,
  useGreetingModal,
} from "../../../../6-Entities/modals";
import { useTaskList } from "../../../../6-Entities/taskList";
import { taskService } from "../../../../7-Shared/API/taskService";
import {
  FAILED_DELETE_TASK,
  SUCCESS_TASK_DELETE,
} from "../../../../7-Shared/assests/Constants";
import { useLoader } from "../../../../7-Shared/hooks/useLoad";
import s from "./index.module.scss";

const ConsentDeleteTaskModalContent = () => {
  const setOpen = useDeleteTaskModal((state) => state.setOpen);
  const setAlert = useAlert((state) => state.setAlert);
  const task = useDeleteTaskModal((state) => state.task);
  const setTaskSwitcher = useTaskList((state) => state.setTaskSwitcher);

  const [isFetch, isLoad, error] = useLoader(
    FAILED_DELETE_TASK,
    setAlert,
    async (params) => {
      const token = reactLocalStorage.get("jwt");
      const response = await taskService.deleteTask(token, task.id);
      setTaskSwitcher();
      console.log(response.data);
      setAlert("success", SUCCESS_TASK_DELETE);
      setOpen(false);
    }
  );

  const handleClick = () => {
    setOpen(false);
  };

  const handleDelete = () => {
    isFetch();
  };

  return (
    <div className={s.content} id="consent-task-delete-modal-content">
      <div className={s["btn-wrap"]}>
        <Button onClick={handleClick} variant="contained">
          Отмена
        </Button>
        <Button
          id="btn-greeting-ok"
          color="error"
          onClick={handleDelete}
          variant="contained"
        >
          Удалить
        </Button>
      </div>
    </div>
  );
};
export default ConsentDeleteTaskModalContent;
