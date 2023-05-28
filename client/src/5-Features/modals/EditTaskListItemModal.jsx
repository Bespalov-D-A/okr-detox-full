import { useEditTaskListItemModal } from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const EditTaskListItemModal = ({ component }) => {
  const open = useEditTaskListItemModal((state) => state.open);
  const setOpen = useEditTaskListItemModal((state) => state.setOpen);
  const setBtnDisabled = useEditTaskListItemModal(
    (state) => state.setBtnDisabled
  );

  const modalHandleClose = () => {
    setBtnDisabled(true);
    setOpen(false);
  };

  return (
    <ModalUI
      title="Назначить лист"
      JSXcomponent={component}
      open={open}
      handleClose={modalHandleClose}
    />
  );
};

export default EditTaskListItemModal;
