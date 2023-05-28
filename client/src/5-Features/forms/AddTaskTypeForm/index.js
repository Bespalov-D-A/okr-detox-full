import Button from "@mui/material/Button";
import AsyncSelect from "react-select/async";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { taskService } from "../../../7-Shared/API/taskService";
import { FAILED_GET_TASK_TYPES } from "../../../7-Shared/assests/Constants";
import s from "./index.module.scss";

const promiseOptions = (e, setAlert) => {
  const token = reactLocalStorage.get("jwt");

  return taskService
    .getTaskTypes(token)
    .then((res) =>
      res.data.data.map((option) => ({
        value: option.attributes.title,
        label: option.attributes.title,
        id: option.id,
      }))
    )
    .catch((e) => {
      setAlert({ type: "error", msg: FAILED_GET_TASK_TYPES });
      console.log(e);
      return [];
    });
};

const AddTaskTypeForm = ({
  id,
  formik,
  taskTypeFormIsOpen,
  setTaskTypeFormIsOpen,
}) => {
  const setAlert = useAlert((state) => state.setAlert);

  return (
    <div className={s.wrap}>
      <AsyncSelect
        key={taskTypeFormIsOpen}
        isSearchable={false}
        name={id}
        id={id}
        placeholder="Выбрать тип задачи"
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
      <Button onClick={setTaskTypeFormIsOpen} variant="contained">
        Создать новый тип задач
      </Button>
    </div>
  );
};

export default AddTaskTypeForm;
