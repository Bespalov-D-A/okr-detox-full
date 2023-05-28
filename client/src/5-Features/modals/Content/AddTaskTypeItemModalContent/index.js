import { useAddTaskTypeItemModal } from "../../../../6-Entities/modals";

const AddTaskListItemModalContent = ({ CreateTaskTypeForm }) => {
  const setThisModalOpen = useAddTaskTypeItemModal((state) => state.setOpen);
  return <div>{CreateTaskTypeForm(setThisModalOpen)}</div>;
};

export default AddTaskListItemModalContent;
