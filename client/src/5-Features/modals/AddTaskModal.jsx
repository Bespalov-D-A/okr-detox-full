import { useAddTaskModal, useLoginModal } from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const AddTaskModal = ({ component }) => {
  const open = useAddTaskModal((state) => state.open);
  const setOpen = useAddTaskModal((state) => state.setOpen);
  const setBtnDisabled = useAddTaskModal((state) => state.setBtnDisabled);

  const modalHandleClose = () => {
    setBtnDisabled(true);
    setOpen(false);
  };

  return (
    <ModalUI
      title="Добавить задачу"
      JSXcomponent={component}
      open={open}
      handleClose={modalHandleClose}
    />
  );
};

export default AddTaskModal;
