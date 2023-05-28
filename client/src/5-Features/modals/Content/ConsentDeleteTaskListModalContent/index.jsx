import Button from "@mui/material/Button";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../../6-Entities/common";
import {
  useDeleteTaskListModal,
  useDeleteTaskModal,
  useGreetingModal,
} from "../../../../6-Entities/modals";
import { useTaskList } from "../../../../6-Entities/taskList";
import { taskService } from "../../../../7-Shared/API/taskService";
import {
  FAILED_DELETE_LIST,
  FAILED_DELETE_TASK,
  SUCCESS_LIST_DELETE,
  SUCCESS_TASK_DELETE,
} from "../../../../7-Shared/assests/Constants";
import { useLoader } from "../../../../7-Shared/hooks/useLoad";
import s from "./index.module.scss";

const ConsentDeleteTaskListModalContent = () => {
  const setOpen = useDeleteTaskListModal((state) => state.setOpen);
  const setAlert = useAlert((state) => state.setAlert);
  const list = useDeleteTaskListModal((state) => state.list);
  const setTaskSwitcher = useTaskList((state) => state.setTaskSwitcher);
  const setSelectedTaskList = useTaskList((state) => state.setSelectedTaskList);

  const [isFetch, isLoad, error] = useLoader(
    FAILED_DELETE_LIST,
    setAlert,
    async (params) => {
      const token = reactLocalStorage.get("jwt");
      const response = await taskService.deleteTaskList(token, list.id);
      setSelectedTaskList({ id: null, attributes: { title: "Все задачи" } });
      setTaskSwitcher();
      setAlert("success", SUCCESS_LIST_DELETE);
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
      <div className={s.desc}>
        Вы хотите удалить лист задач и все задачи которые ему принадлежат?
      </div>
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
export default ConsentDeleteTaskListModalContent;
