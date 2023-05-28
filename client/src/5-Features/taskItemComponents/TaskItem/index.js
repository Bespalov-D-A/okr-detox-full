import s from "./index.module.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Collapse from "@mui/material/Collapse";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {
  useAddTaskListItemModal,
  useAddTaskTypeItemModal,
  useEditTaskListItemModal,
  useEditTaskTypeItemModal,
} from "../../../6-Entities/modals";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const TaskItem = ({
  id,
  completed,
  title,
  description,
  date,
  time,
  SetCompleteBtn,
  taskType,
  taskList,
  EditTaskBtn,
  TaskItemMenu,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const setOpenTaskListModal = useAddTaskListItemModal(
    (state) => state.setOpen
  );
  const setOpenTaskTypeModal = useAddTaskTypeItemModal(
    (state) => state.setOpen
  );
  const setOpenSelectTypeModal = useEditTaskTypeItemModal(
    (state) => state.setOpen
  );
  const setOpenSelectListModal = useEditTaskListItemModal(
    (state) => state.setOpen
  );
  const setTaskTypeId = useEditTaskTypeItemModal((state) => state.setTaskId);
  const setTaskListId = useEditTaskListItemModal((state) => state.setTaskId);
  const setSelectedType = useEditTaskTypeItemModal(
    (state) => state.setSelectedType
  );
  const setSelectedList = useEditTaskListItemModal(
    (state) => state.setSelectedList
  );
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClickList = () => {
    const objList = !!taskList.data
      ? {
          id: taskList.data.id,
          value: taskList.data.attributes.title,
          label: taskList.data.attributes.title,
        }
      : null;
    setSelectedList(objList);
    setTaskListId(id);
    setOpenSelectListModal(true);
  };

  const handleClickType = () => {
    const objType = !!taskType.data
      ? {
          id: taskType.data.id,
          value: taskType.data.attributes.title,
          label: taskType.data.attributes.title,
        }
      : null;
    setSelectedType(objType);
    setTaskTypeId(id);
    setOpenSelectTypeModal(true);
  };

  return (
    <Card className={s.card}>
      <Tooltip title="Статус задачи">
        <div className={s.bar}>
          Статус:{" "}
          {completed ? (
            <span className={s.success}>Выполнено</span>
          ) : (
            "Ожидает выполнения"
          )}
          <div className={s.time}>
            {`${date || time ? "На" : "Без времени"}  ${date ? date : ""}  ${
              time ? time : ""
            }`}
          </div>
        </div>
      </Tooltip>
      <CardHeader
        title={title}
        action={
          <IconButton
            aria-label="settings"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            <MoreVertIcon />
          </IconButton>
        }
      />

      <CardContent className={s["list-type"]}>
        <Tooltip title="Изменить">
          <Button
            variant="outlined"
            className={s["list-type__btn"]}
            onClick={handleClickList}
          >
            {!!taskList.data ? taskList.data.attributes.title : "Без листа"}
          </Button>
        </Tooltip>
        <Tooltip title="Изменить">
          <Button
            variant="outlined"
            className={s["list-type__btn"]}
            onClick={handleClickType}
          >
            {!!taskType.data ? taskType.data.attributes.title : "Без типа"}
          </Button>
        </Tooltip>
      </CardContent>

      <CardActions disableSpacing>
        {TaskItemMenu(id, open, handleClose, anchorEl)}
        {SetCompleteBtn(completed, id)}
        {description.length > 0 && (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <Tooltip title="Описание задачи">
              <ExpandMoreIcon />
            </Tooltip>
          </ExpandMore>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>{description}</CardContent>
      </Collapse>
    </Card>
  );
};
export default TaskItem;
