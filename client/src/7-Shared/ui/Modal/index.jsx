//Модальное окно. Принимает параметрами содержание
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import s from "./index.module.scss";
import IconButton from "@mui/material/IconButton";
import Fade from "@mui/material/Fade";

const ModalUI = (props) => {
  const { JSXcomponent, open, handleClose, title } = props;

  return (
    <Modal
      open={open}
      onClose={handleClose}
      closeAfterTransition
      className={s.wrap}
    >
      <Fade in={open}>
        <div className={s.modal}>
          <div className={s.close}>
            <IconButton
              color="error"
              aria-label="upload picture"
              component="label"
              className={s["close-btn"]}
              onClick={handleClose}
              id="close-modal"
            >
              <CloseIcon fontSize="large" className={s["close-ico"]} />
            </IconButton>
          </div>

          <Typography variant="h4" component="h4" className={s.title}>
            {title}
          </Typography>
          <div className={s.content}>{JSXcomponent()}</div>
        </div>
      </Fade>
    </Modal>
  );
};

export default ModalUI;
