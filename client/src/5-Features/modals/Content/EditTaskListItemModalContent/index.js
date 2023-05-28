import Button from "@mui/material/Button";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../../6-Entities/common";
import { useEditTaskListItemModal } from "../../../../6-Entities/modals";
import { useTaskList } from "../../../../6-Entities/taskList";
import { taskService } from "../../../../7-Shared/API/taskService";
import {
  FAILED_EDIT_TASK,
  SUCCESS_TASK_UPDATE,
} from "../../../../7-Shared/assests/Constants";
import { useLoader } from "../../../../7-Shared/hooks/useLoad";
import s from "./index.module.scss";

const EditTaskListItemModalContent = ({ SelectTaskListF }) => {
  const setThisModalOpen = useEditTaskListItemModal((state) => state.setOpen);
  const setAlert = useAlert((state) => state.setAlert);
  const setOpen = useEditTaskListItemModal((state) => state.setOpen);
  const taskId = useEditTaskListItemModal((state) => state.taskId);
  const taskSwitcher = useTaskList((state) => state.taskSwitcher);
  const setTaskSwitcher = useTaskList((state) => state.setTaskSwitcher);
  const setTaskId = useEditTaskListItemModal((state) => state.setTaskId);
  const selectedList = useEditTaskListItemModal((state) => state.selectedList);
  const setSelectedList = useEditTaskListItemModal(
    (state) => state.setSelectedList
  );

  const [isFetch, isLoad, error] = useLoader(
    FAILED_EDIT_TASK,
    setAlert,
    async (params) => {
      const token = reactLocalStorage.get("jwt");
      const data = {
        task_list: !!selectedList.id ? selectedList.id : null,
      };
      const response = await taskService.updateTask(token, taskId, data);
      console.log(response);
      setAlert("success", SUCCESS_TASK_UPDATE);
    }
  );

  const handleClick = () => {
    isFetch();
    setSelectedList(null);
    setOpen(false);
    setTaskId(false);
    setTaskSwitcher(!taskSwitcher);
  };

  return (
    <div>
      {SelectTaskListF(selectedList, setSelectedList)}
      <div className={s["btn-wrap"]}>
        <Button onClick={handleClick} variant="contained">
          Назначить
        </Button>
      </div>
    </div>
  );
};

export default EditTaskListItemModalContent;
