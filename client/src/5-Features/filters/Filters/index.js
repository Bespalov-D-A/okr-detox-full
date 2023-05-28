import { useTaskList } from "../../../6-Entities/taskList";
import s from "./index.module.scss";

const Filters = ({ selectType, children }) => {
  const selectedTaskType = useTaskList((state) => state.selectTaskType);
  const setSelectedTaskType = useTaskList((state) => state.setSelectedTaskType);

  return (
    <div className={s.filters}>
      {selectType(selectedTaskType, setSelectedTaskType)}
      {children}
    </div>
  );
};

export default Filters;
