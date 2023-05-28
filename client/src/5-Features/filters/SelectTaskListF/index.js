import AsyncSelect from "react-select/async";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { useTaskList } from "../../../6-Entities/taskList";
import { taskService } from "../../../7-Shared/API/taskService";
import s from "./index.module.scss";
import {
  FAILED_GET_TASK_LISTS,
  FAILED_GET_TASK_TYPES,
} from "../../../7-Shared/assests/Constants";
import {
  useAddTaskListItemModal,
  useAddTaskTypeItemModal,
  useEditTaskListItemModal,
} from "../../../6-Entities/modals";

const promiseOptions = (e, setAlert) => {
  const token = reactLocalStorage.get("jwt");

  return taskService
    .getTaskLists(token)
    .then((res) => {
      const newRes = [{}, ...res.data.data];
      return newRes.map((option, index) => ({
        value: index === 0 ? "" : option.attributes.title,
        label: index === 0 ? "Без листа" : option.attributes.title,
        id: index === 0 ? null : option.id,
      }));
    })
    .catch((e) => {
      setAlert({ type: "error", msg: FAILED_GET_TASK_LISTS });
      console.log(e);
      return [];
    });
};

const SelectTaskListF = ({ selectedTaskList, setSelectedTaskList }) => {
  const open = useEditTaskListItemModal((state) => state.open);
  const setAlert = useAlert((state) => state.setAlert);

  const handleChange = (e) => {
    setSelectedTaskList(e);
  };

  return (
    <AsyncSelect
      key={open}
      className={s.select}
      isSearchable={false}
      name="selectTaskList"
      id="selectTaskList"
      placeholder="Выбрать лист задачи"
      cacheOptions
      defaultOptions
      value={selectedTaskList}
      onBlur={(e) => {}}
      onChange={handleChange}
      loadOptions={(e) => promiseOptions(e, setAlert)}
    />
  );
};

export default SelectTaskListF;
