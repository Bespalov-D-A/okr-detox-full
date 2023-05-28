import { useAddTaskListItemModal } from "../../../../6-Entities/modals";

const AddTaskListItemModalContent = ({ CreateListForm }) => {
  const setThisModalOpen = useAddTaskListItemModal((state) => state.setOpen);
  return <div>{CreateListForm(setThisModalOpen)}</div>;
};

export default AddTaskListItemModalContent;
