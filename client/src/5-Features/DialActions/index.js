import PlaylistAddIcon from "@mui/icons-material/PlaylistAdd";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";
import CreateIcon from "@mui/icons-material/Create";
import {
  useAddTaskListItemModal,
  useAddTaskModal,
  useAddTaskTypeItemModal,
} from "../../6-Entities/modals";

const DialActions = ({ parent }) => {
  const setOpenAddTask = useAddTaskModal((state) => state.setOpen);
  const setOpenAddTaskList = useAddTaskListItemModal((state) => state.setOpen);
  const setOpenAddTaskType = useAddTaskTypeItemModal((state) => state.setOpen);

  const actions = [
    {
      icon: <PlaylistAddIcon />,
      name: "Новый лист задач",
      action: () => setOpenAddTaskList(true),
    },
    {
      icon: <TypeSpecimenIcon />,
      name: "Новый тип задач",
      action: () => setOpenAddTaskType(true),
    },
    {
      icon: <CreateIcon />,
      name: "Новая задача",
      action: () => setOpenAddTask(true),
    },
  ];

  return <>{parent(actions)}</>;
};

export default DialActions;
