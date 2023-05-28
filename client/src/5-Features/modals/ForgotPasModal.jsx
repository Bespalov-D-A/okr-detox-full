import { useForgotPassModal, useLoginModal } from "../../6-Entities/modals";
import ModalUI from "../../7-Shared/ui/Modal";

const ForgotPassModal = ({ component }) => {
  const openForgotPassModal = useForgotPassModal((state) => state.open);
  const setOpenForgotPassModal = useForgotPassModal((state) => state.setOpen);
  const setAuthBtnDisabled = useLoginModal((state) => state.setAuthBtnDisabled);

  const modalHandleClose = () => {
    setAuthBtnDisabled(true);
    setOpenForgotPassModal(false);
  };

  return (
    <ModalUI
      title="Восстановление пароль"
      JSXcomponent={component}
      open={openForgotPassModal}
      handleClose={modalHandleClose}
    />
  );
};

export default ForgotPassModal;
