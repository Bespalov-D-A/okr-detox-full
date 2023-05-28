import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { reactLocalStorage } from "reactjs-localstorage";
import s from "./index.module.scss";

const ExitBtn = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    reactLocalStorage.remove("jwt");
    reactLocalStorage.remove("user");
    navigate("/greetings");
  };

  return (
    <Button
      onClick={handleClick}
      className={s.btn}
      variant="outlined"
      color="secondary"
    >
      Выйти из аккаунта
    </Button>
  );
};

export default ExitBtn;
