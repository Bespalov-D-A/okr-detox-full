import { useDeleteTaskModal } from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const ConsentTaskDeleteModal = ({ component }) => {
  const open = useDeleteTaskModal((state) => state.open);
  const taskTitle = useDeleteTaskModal((state) => state.task?.title);
  const setOpen = useDeleteTaskModal((state) => state.setOpen);
  const modalHandleClose = () => {
    setOpen(false);
  };

  return (
    <ModalUI
      title={`Удалить задачу "${taskTitle && taskTitle}"?`}
      JSXcomponent={component}
      open={open}
      handleClose={modalHandleClose}
    />
  );
};

export default ConsentTaskDeleteModal;
