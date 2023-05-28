import { useGreetingModal, useLoginModal } from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const GreetingModal = ({ component }) => {
  const open = useGreetingModal((state) => state.open);
  const setOpen = useGreetingModal((state) => state.setOpen);
  const modalHandleClose = () => {
    setOpen(false);
  };

  return (
    <ModalUI
      title="Пребывайте в гармонии ощущая порядок"
      JSXcomponent={component}
      open={open}
      handleClose={modalHandleClose}
    />
  );
};

export default GreetingModal;
