import IconButton from "@mui/material/IconButton";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EditIcon from "@mui/icons-material/Edit";
import Tooltip from "@mui/material/Tooltip";

const TaskEditBtn = ({ taskId }) => {
  return (
    <Tooltip title="Реактировать задачу">
      <IconButton aria-label="share">
        <EditIcon />
      </IconButton>
    </Tooltip>
  );
};

export default TaskEditBtn;
