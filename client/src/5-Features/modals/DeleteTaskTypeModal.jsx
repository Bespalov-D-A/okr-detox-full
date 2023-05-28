import { useDeleteTaskTypesModal } from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const ConsentTaskDeleteModal = ({ component }) => {
  const open = useDeleteTaskTypesModal((state) => state.open);
  const setOpen = useDeleteTaskTypesModal((state) => state.setOpen);
  const modalHandleClose = () => {
    setOpen(false);
  };

  return (
    <ModalUI
      title={`Управление типами`}
      JSXcomponent={component}
      open={open}
      handleClose={modalHandleClose}
    />
  );
};

export default ConsentTaskDeleteModal;
