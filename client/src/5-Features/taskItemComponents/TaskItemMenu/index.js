import ListItemIcon from "@mui/material/ListItemIcon";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ContentCut from "@mui/icons-material/ContentCut";
import { useDeleteTaskModal } from "../../../6-Entities/modals";
import { useTaskList } from "../../../6-Entities/taskList";

const TaskItemMenu = ({ id, open, handleClose, anchorEl }) => {
  const setOpenDeleteTaskModal = useDeleteTaskModal((state) => state.setOpen);
  const setTaskModal = useDeleteTaskModal((state) => state.setTask);
  const getTaskById = useTaskList((state) => state.getTaskById);

  const handleDelete = () => {
    setTaskModal({ id, title: getTaskById(id).attributes.title });
    handleClose();
    setOpenDeleteTaskModal(true);
  };

  return (
    <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      MenuListProps={{
        "aria-labelledby": "basic-button",
      }}
    >
      <MenuItem onClick={handleDelete}>
        <ListItemIcon>
          <ContentCut fontSize="small" />
        </ListItemIcon>
        Удалить задачу
      </MenuItem>
    </Menu>
  );
};

export default TaskItemMenu;
