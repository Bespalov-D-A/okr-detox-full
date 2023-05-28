import Button from "@mui/material/Button";
import { useNavigate } from "react-router";
import { useGreetingModal, useLoginModal } from "../../../6-Entities/modals";
import { theme } from "../../../7-Shared/assests/mui/WithTheme";
import s from "./index.module.scss";

const ActionBlock = () => {
  const setOpenLoginModal = useLoginModal((state) => state.setOpen);
  const setOpen = useGreetingModal((state) => state.setOpen);
  const navigate = useNavigate();

  return (
    <div className={s.actions}>
      <Button
        onClick={() => setOpen(true)}
        variant="contained"
        className={`${s.btn} ${s.what}`}
        id="btn-greeting"
      >
        Что это?
      </Button>
      <div className={s.wrap}>
        <Button
          onClick={() => navigate("/registration", { replace: true })}
          id="btn-registration"
          variant="contained"
          className={s.btn}
        >
          Регистрация
        </Button>
        <Button
          onClick={() => setOpenLoginModal(true)}
          variant="contained"
          className={s.btn}
          id="btn-login"
        >
          Войти
        </Button>
      </div>
    </div>
  );
};

export default ActionBlock;
