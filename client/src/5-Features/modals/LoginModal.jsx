import { useLoginModal } from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const RegistrationModal = ({ component }) => {
  const openLoginModal = useLoginModal((state) => state.open);
  const setOpenLoginModal = useLoginModal((state) => state.setOpen);
  const setAuthBtnDisabled = useLoginModal((state) => state.setAuthBtnDisabled);

  const modalHandleClose = () => {
    setAuthBtnDisabled(true);
    setOpenLoginModal(false);
  };

  return (
    <ModalUI
      title="Авторизация"
      JSXcomponent={component}
      open={openLoginModal}
      handleClose={modalHandleClose}
    />
  );
};

export default RegistrationModal;
