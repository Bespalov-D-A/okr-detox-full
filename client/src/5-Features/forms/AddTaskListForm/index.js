import Button from "@mui/material/Button";
import AsyncSelect from "react-select/async";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { taskService } from "../../../7-Shared/API/taskService";
import { FAILED_GET_TASK_LISTS } from "../../../7-Shared/assests/Constants";
import {ShowDateDisplay} from "../../../7-Shared/lib/ShowDateDispay";
import s from "./index.module.scss";

const promiseOptions = (e, setAlert) => {
  const token = reactLocalStorage.get("jwt");

  return taskService
    .getTaskLists(token)
    .then((res) =>
      res.data.data.map((option) => ({
        value: option.attributes.title,
        label:
          option.attributes.title +
          ShowDateDisplay(option.attributes.date, option.attributes.time),
        id: option.id,
      }))
    )
    .catch((e) => {
      setAlert({ type: "error", msg: FAILED_GET_TASK_LISTS });
      console.log(e);
      return [];
    });
};

const AddTaskListForm = ({
  id,
  formik,
  taskListFormIsOpen,
  setTaskListFormIsOpen,
}) => {
  const setAlert = useAlert((state) => state.setAlert);

  return (
    <div className={s.wrap}>
      <AsyncSelect
        key={taskListFormIsOpen}
        isSearchable={false}
        name={id}
        id={id}
        placeholder="Выбрать лист задач"
        cacheOptions
        defaultOptions
        value={formik.values[id]}
        onBlur={(e) => {
          formik.getFieldProps(id).onBlur(e);
        }}
        onChange={(e) => {
          const event = new Event("change", { bubbles: true });
          Object.defineProperty(event, "target", {
            value: { value: e },
            writable: false,
          });
          formik.handleChange(id);
          formik.setFieldValue(id, e);
        }}
        loadOptions={(e) => promiseOptions(e, setAlert)}
      />
      <div className={s.or}>или</div>
      <Button onClick={setTaskListFormIsOpen} variant="contained">
        Создать новый лист задач
      </Button>
    </div>
  );
};

export default AddTaskListForm;
