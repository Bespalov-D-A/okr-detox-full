import Button from "@mui/material/Button";
import { useForgotPassModal, useLoginModal } from "../../../6-Entities/modals";
import s from "./index.module.scss";

const Forgot = () => {
  const setOpenLoginModal = useLoginModal((state) => state.setOpen);
  const setOpenForgotPasModal = useForgotPassModal((state) => state.setOpen);

  const handleClick = () => {
    setOpenLoginModal(false);
    setOpenForgotPasModal(true);
  };

  return (
    <div className={s.wrap}>
      <Button id="btn-forgot" onClick={handleClick} variant="text">
        забыл пароль
      </Button>
    </div>
  );
};

export default Forgot;
