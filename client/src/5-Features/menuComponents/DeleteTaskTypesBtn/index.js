import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import IconButton from "@mui/material/IconButton";
import s from "./index.module.scss";
import { useDeleteTaskTypesModal } from "../../../6-Entities/modals";
import { useCommon } from "../../../6-Entities/common";

const DeleteTaskTypeBtn = () => {
  const setOpen = useDeleteTaskTypesModal((state) => state.setOpen);
  const setIsOpenMenu = useCommon((state) => state.setIsOpenMenu);

  const handleClick = () => {
    setIsOpenMenu(false);
    setOpen(true);
  };

  return (
    <List className={s.list}>
      <ListItem className={s.item} disablePadding>
        <IconButton
          onClick={handleClick}
          color="default"
          aria-label="upload picture"
          component="label"
        >
          <FormatListBulletedIcon fontSize="small" />
        </IconButton>
        <ListItemButton onClick={handleClick}>
          <ListItemText primary={"Типы задач"} />
        </ListItemButton>
      </ListItem>
    </List>
  );
};

export default DeleteTaskTypeBtn;
