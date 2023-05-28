import Button from "@mui/material/Button";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../../6-Entities/common";
import { useEditTaskTypeItemModal } from "../../../../6-Entities/modals";
import { useTaskList } from "../../../../6-Entities/taskList";
import { taskService } from "../../../../7-Shared/API/taskService";
import {
  FAILED_EDIT_TASK,
  SUCCESS_TASK_UPDATE,
} from "../../../../7-Shared/assests/Constants";
import { useLoader } from "../../../../7-Shared/hooks/useLoad";
import s from "./index.module.scss";

const EditTaskTypeItemModalContent = ({ SelectTypeTaskF }) => {
  const setAlert = useAlert((state) => state.setAlert);
  const setOpen = useEditTaskTypeItemModal((state) => state.setOpen);
  const taskId = useEditTaskTypeItemModal((state) => state.taskId);
  const taskSwitcher = useTaskList((state) => state.taskSwitcher);
  const setTaskSwitcher = useTaskList((state) => state.setTaskSwitcher);
  const setTaskId = useEditTaskTypeItemModal((state) => state.setTaskId);
  const selectedType = useEditTaskTypeItemModal((state) => state.selectedType);
  const setSelectedType = useEditTaskTypeItemModal(
    (state) => state.setSelectedType
  );

  const [isFetch, isLoad, error] = useLoader(
    FAILED_EDIT_TASK,
    setAlert,
    async (params) => {
      const token = reactLocalStorage.get("jwt");
      const data = {
        task_type: !!selectedType.id ? selectedType.id : null,
      };
      const response = await taskService.updateTask(token, taskId, data);
      console.log(response);
      setAlert("success", SUCCESS_TASK_UPDATE);
    }
  );

  const handleClick = () => {
    isFetch();
    setSelectedType(null);
    setOpen(false);
    setTaskId(false);
    setTaskSwitcher(!taskSwitcher);
  };

  return (
    <div>
      {SelectTypeTaskF(selectedType, setSelectedType)}
      <div className={s["btn-wrap"]}>
        <Button onClick={handleClick} variant="contained">
          Назначить
        </Button>
      </div>
    </div>
  );
};

export default EditTaskTypeItemModalContent;
