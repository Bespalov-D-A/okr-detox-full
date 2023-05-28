import Typography from "@mui/material/Typography";
import Container from "@mui/system/Container";
import qs from "qs";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert } from "../../../6-Entities/common";
import { useTaskList } from "../../../6-Entities/taskList";
import { taskService } from "../../../7-Shared/API/taskService";
import { FAILED_GET_TASKS } from "../../../7-Shared/assests/Constants";
import { useLoader } from "../../../7-Shared/hooks/useLoad";
import { isTokenValid } from "../../../7-Shared/lib/CheckJWT";
import { clearJWT } from "../../../7-Shared/lib/ClearJWT";
import s from "./index.module.scss";
import { Paper } from "@mui/material";

const TaskList = ({ Filters, Pagination, TaskItem }) => {
  const taskList = useTaskList((state) => state.list);
  const selectedTaskList = useTaskList((state) => state.selectedTaskList);
  const selectedTaskType = useTaskList((state) => state.selectedTaskType);
  const selectedTaskCompleted = useTaskList(
    (state) => state.selectedTaskCompleted
  );
  const setTaskList = useTaskList((state) => state.setList);
  const setAlert = useAlert((state) => state.setAlert);
  const taskSwitcher = useTaskList((state) => state.taskSwitcher);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [pageCount, setPageCount] = useState(0);
  let query;

  const [isFetch, isLoad, error] = useLoader(
    FAILED_GET_TASKS,
    setAlert,
    async (params) => {
      const token = reactLocalStorage.get("jwt");
      const response = await taskService.getTasks(token, query);
      if (!isTokenValid(token)) clearJWT(setAlert);
      //Выводим пагинацию только если она нужна
      setPageCount(
        response.data.meta.pagination.total > pageSize
          ? response.data.meta.pagination.pageCount
          : null
      );
      setTaskList(response.data.data);
    }
  );

  useEffect(() => {
    const taskListFilter = selectedTaskList ? selectedTaskList.id : undefined;
    const taskTypeFilter = selectedTaskType ? selectedTaskType.id : undefined;
    const taskSelectedFilter = selectedTaskCompleted?.id
      ? selectedTaskCompleted
      : undefined;

    const filters = {
      ...(taskListFilter && { task_list: taskListFilter }),
      ...(taskTypeFilter && { task_type: taskTypeFilter }),
      ...(taskSelectedFilter && { completed: taskSelectedFilter.value }),
    };

    const pagination = {
      page,
      pageSize,
    };

    const populate = {
      task_list: {
        fields: ["id", "title"],
      },
      task_type: {
        fields: ["id", "title"],
      },
    };

    const filtersString = qs.stringify({ populate, filters, pagination });
    query = filtersString.length ? filtersString : null;
    isFetch();
  }, [
    taskSwitcher,
    selectedTaskList,
    selectedTaskType,
    selectedTaskCompleted,
    page,
  ]);

  return (
    <Container className={s.wrap} maxWidth="xl">
      <div>
        <Paper elevation={0} className={s["title-wrap"]}>
          <Typography className={s["list-title"]} component="h5" variant="h5">
            Выбран лист:{" "}
            {selectedTaskList?.title ? selectedTaskList?.title : "все"}
          </Typography>
        </Paper>
        <div className={s.filters}>{Filters()}</div>
      </div>

      <div className={s.list}>
        {Boolean(taskList?.length) ? (
          <div>{taskList.map(TaskItem)}</div>
        ) : (
          <div className={s["title-parent"]}>
            <Typography className={s.title} component="h3" variant="h3">
              Задач нет
            </Typography>
          </div>
        )}
      </div>
      {Boolean(taskList?.length) ? (
        <div className={s.pagination}>
          {pageCount && Pagination(page, setPage, pageCount)}
        </div>
      ) : (
        ""
      )}
    </Container>
  );
};

export default TaskList;
