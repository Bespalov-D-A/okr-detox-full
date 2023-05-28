import {
  useAddTaskListItemModal,
  useAddTaskModal,
  useAddTaskTypeItemModal,
  useLoginModal,
} from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const AddTaskTypeItemModal = ({ component }) => {
  const open = useAddTaskTypeItemModal((state) => state.open);
  const setOpen = useAddTaskTypeItemModal((state) => state.setOpen);
  const setBtnDisabled = useAddTaskTypeItemModal(
    (state) => state.setBtnDisabled
  );

  const modalHandleClose = () => {
    setBtnDisabled(true);
    setOpen(false);
  };

  return (
    <ModalUI
      title="Добавить тип задач"
      JSXcomponent={component}
      open={open}
      handleClose={modalHandleClose}
    />
  );
};

export default AddTaskTypeItemModal;
