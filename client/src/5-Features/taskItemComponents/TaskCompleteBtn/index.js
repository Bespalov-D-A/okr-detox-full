import Tooltip from "@mui/material/Tooltip";
import { useAlert } from "../../../6-Entities/common";
import { useLoader } from "../../../7-Shared/hooks/useLoad";
import s from "./index.module.scss";
import {
  FAILED_EDIT_TASK,
  SUCCESS_TASK_STATUS_EDIT,
} from "../../../7-Shared/assests/Constants";
import { reactLocalStorage } from "reactjs-localstorage";
import { taskService } from "../../../7-Shared/API/taskService";
import { useTaskList } from "../../../6-Entities/taskList";
import Checkbox from "@mui/material/Checkbox";
import { useEffect, useState } from "react";

const TaskCompleteBtn = ({ completed, taskId }) => {
  const [checked, setChecked] = useState(false);
  const setAlert = useAlert((state) => state.setAlert);
  const getTaskById = useTaskList((state) => state.getTaskById);
  const setTaskSwitcher = useTaskList((state) => state.setTaskSwitcher);
  const task = getTaskById(taskId);
  let timer;

  const [isFetch, isLoad, error] = useLoader(
    FAILED_EDIT_TASK,
    setAlert,
    async (params) => {
      const token = reactLocalStorage.get("jwt");
      const response = await taskService.updateTask(token, taskId, {
        completed: !task.attributes.completed,
      });
      setTaskSwitcher();
      console.log(response.data);

      setAlert("success", SUCCESS_TASK_STATUS_EDIT);
    }
  );
  const handleChange = () => {
    setChecked(!task.attributes.completed);
    timer = setTimeout(() => isFetch(), 500);
  };

  useEffect(() => {
    setChecked(task.attributes.completed);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Tooltip
      title={
        task.attributes.completed
          ? "Вернуть в 'не завершено'"
          : "Завершить задачу"
      }
    >
      <div className={s.title}>
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
          sx={{ "& .MuiSvgIcon-root": { fontSize: 36 } }}
        />
        <p>
          {task.attributes.completed
            ? "переместить в невыполненные"
            : "переместить в выполненные"}
        </p>
      </div>
    </Tooltip>
  );
};

export default TaskCompleteBtn;
