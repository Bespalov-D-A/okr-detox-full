import Alert from "@mui/material/Alert";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import s from "./index.module.scss";

//Для открытия алерта установите type и message
//в src/entities/common. При закрытии алерта
//type и message становятся null
//type: error || warning || info || success
const AlertUI = ({ type, content, onClose }) => {
  return (
    <>
      {type && (
        <Alert
          className={s.alert}
          severity={type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={onClose}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {content()}
        </Alert>
      )}
    </>
  );
};

export default AlertUI;
