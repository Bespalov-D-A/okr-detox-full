import List from "@mui/material/List";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { useEffect, useState } from "react";
import { reactLocalStorage } from "reactjs-localstorage";
import { useAlert, useCommon } from "../../../6-Entities/common";
import { useTaskList } from "../../../6-Entities/taskList";
import { taskService } from "../../../7-Shared/API/taskService";
import { FAILED_GET_TASK_LISTS } from "../../../7-Shared/assests/Constants";
import { useLoader } from "../../../7-Shared/hooks/useLoad";
import CustomScrollBar from "../../../7-Shared/ui/CustomScrollBar";
import s from "./index.module.scss";
import IconButton from "@mui/material/IconButton";
import { useDeleteTaskListModal } from "../../../6-Entities/modals";
import Divider from "@mui/material/Divider";

const TasklistsList = () => {
  const setAlert = useAlert((state) => state.setAlert);
  const setSelectedTaskList = useTaskList((state) => state.setSelectedTaskList);
  const setIsOpenMenu = useCommon((state) => state.setIsOpenMenu);
  const setDelitingList = useDeleteTaskListModal((state) => state.setList);
  const setOpenDeleteListModal = useDeleteTaskListModal(
    (state) => state.setOpen
  );
  const [list, setLists] = useState(null);

  const [isFetch, isLoad, error] = useLoader(
    FAILED_GET_TASK_LISTS,
    setAlert,
    async (params) => {
      const token = reactLocalStorage.get("jwt");
      taskService
        .getTaskLists(token)
        .then((res) => {
          setLists(res.data);
        })
        .catch((e) => {
          setAlert({ type: "error", msg: FAILED_GET_TASK_LISTS });
          console.log(e);
        });
    }
  );

  useEffect(() => {
    isFetch();
  }, []);

  function handleClick(listItem) {
    setIsOpenMenu(false);
    setSelectedTaskList({ id: listItem.id, title: listItem.attributes.title });
  }

  function handleDelete(list) {
    console.log(list);
    setIsOpenMenu(false);
    setDelitingList({ id: list.id, title: list.attributes.title });
    setOpenDeleteListModal(true);
  }

  function selectBtn(list) {
    if (list.id)
      return (
        <IconButton
          onClick={() => handleDelete(list)}
          color="default"
          aria-label="upload picture"
          component="label"
        >
          <DeleteForeverIcon />
        </IconButton>
      );
    else
      return (
        <IconButton
          onClick={() => handleClick(list)}
          color="default"
          aria-label="upload picture"
          component="label"
        >
          <AllInboxIcon />
        </IconButton>
      );
  }

  function mapList() {
    let mapList;
    if (list) {
      let newList = [
        { id: null, attributes: { title: "Все задачи" } },
        ...list.data,
      ];
      mapList = newList?.map((list) => (
        <ListItem className={s.item} key={list.id} disablePadding>
          {selectBtn(list)}
          <ListItemButton onClick={() => handleClick(list)}>
            <ListItemText primary={list.attributes.title} />
          </ListItemButton>
        </ListItem>
      ));
    }
    return mapList;
  }

  return (
    <div className={s.wrap}>
      <p className={s.title}>Ваши листы задач</p>
      {list && (
        <List className={s.lists}>
          <CustomScrollBar>{mapList()}</CustomScrollBar>
          <Divider />
        </List>
      )}
    </div>
  );
};

export default TasklistsList;
