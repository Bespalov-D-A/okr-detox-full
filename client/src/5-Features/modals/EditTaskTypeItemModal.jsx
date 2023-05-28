import { useEditTaskTypeItemModal } from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const EditTaskTypeItemModal = ({ component }) => {
  const open = useEditTaskTypeItemModal((state) => state.open);
  const setOpen = useEditTaskTypeItemModal((state) => state.setOpen);
  const setBtnDisabled = useEditTaskTypeItemModal(
    (state) => state.setBtnDisabled
  );

  const modalHandleClose = () => {
    setBtnDisabled(true);
    setOpen(false);
  };

  return (
    <ModalUI
      title="Назначить тип"
      JSXcomponent={component}
      open={open}
      handleClose={modalHandleClose}
    />
  );
};

export default EditTaskTypeItemModal;
