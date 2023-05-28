import Button from "@mui/material/Button";
import { useGreetingModal } from "../../../../6-Entities/modals";
import { Lor } from "../../../../7-Shared/assests/Lor";
import CustomScrollBar from "../../../../7-Shared/ui/CustomScrollBar";
import s from "./index.module.scss";

const GreetingModalContent = () => {
  const setOpen = useGreetingModal((state) => state.setOpen);

  return (
    <div className={s.greeting} id="greeting-modal-content">
      <div className={s.description}>
        <CustomScrollBar>
          <div>
            {Lor()}
            <p className={s.author}>
              {" "}
              <a
                className={s.lnk}
                target="_blank"
                href="https://www.linkedin.com/in/denis-bespalov/"
              >
                Denis Bespalov
              </a>
            </p>
          </div>
        </CustomScrollBar>
      </div>
      <div className={s["btn-wrap"]}>
        <Button
          id="btn-greeting-ok"
          onClick={() => setOpen(false)}
          variant="contained"
        >
          Понятно
        </Button>
      </div>
    </div>
  );
};
export default GreetingModalContent;
