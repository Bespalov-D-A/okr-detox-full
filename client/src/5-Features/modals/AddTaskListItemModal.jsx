import {
  useAddTaskListItemModal,
  useAddTaskModal,
  useLoginModal,
} from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const AddTaskListItemModal = ({ component }) => {
  const open = useAddTaskListItemModal((state) => state.open);
  const setOpen = useAddTaskListItemModal((state) => state.setOpen);
  const setBtnDisabled = useAddTaskListItemModal(
    (state) => state.setBtnDisabled
  );

  const modalHandleClose = () => {
    setBtnDisabled(true);
    setOpen(false);
  };

  return (
    <ModalUI
      title="Добавить лист задач"
      JSXcomponent={component}
      open={open}
      handleClose={modalHandleClose}
    />
  );
};

export default AddTaskListItemModal;
