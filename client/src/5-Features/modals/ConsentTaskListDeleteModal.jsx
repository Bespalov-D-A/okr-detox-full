import { useDeleteTaskListModal } from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const ConsentTaskListDeleteModal = ({ component }) => {
  const open = useDeleteTaskListModal((state) => state.open);
  const listTitle = useDeleteTaskListModal((state) => state.list?.title);
  const setOpen = useDeleteTaskListModal((state) => state.setOpen);
  const modalHandleClose = () => {
    setOpen(false);
  };

  return (
    <ModalUI
      title={`Удаление листа "${listTitle && listTitle}"`}
      JSXcomponent={component}
      open={open}
      handleClose={modalHandleClose}
    />
  );
};

export default ConsentTaskListDeleteModal;
