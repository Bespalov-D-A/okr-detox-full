import { useEffect } from "react";
import s from "./index.module.scss";
import Select from "react-select";
import AsyncSelect from "react-select/async";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { useTaskList } from "../../../6-Entities/taskList";
import { taskService } from "../../../7-Shared/API/taskService";
import { FAILED_GET_TASK_TYPES } from "../../../7-Shared/assests/Constants";

const options = [
  { value: true, label: "Только выполненные", id: 1 },
  { value: false, label: "Только  невыполненные", id: 2 },
  { value: "", label: "Показать все", id: null },
];

const SelectTaskCompletedF = () => {
  const selectedTaskCompleted = useTaskList(
    (state) => state.selectedTaskCompleted
  );
  const setSelectedTaskCompleted = useTaskList(
    (state) => state.setSelectedTaskCompleted
  );

  const handleChange = (e) => {
    console.log(selectedTaskCompleted);
    setSelectedTaskCompleted(e);
  };

  useEffect(() => setSelectedTaskCompleted(options[1]), []);

  return (
    <Select
      //key={taskTypeFormIsOpen}
      isSearchable={false}
      className={s.select}
      name="selectTaskType"
      id="selectTaskType"
      placeholder="Выбрать тип задачи"
      value={selectedTaskCompleted}
      onBlur={(e) => {}}
      onChange={handleChange}
      defaultValue={options[0]}
      options={options}
    />
  );
};

export default SelectTaskCompletedF;
