import Dial from "../../7-Shared/ui/Dial";
import DialActions from "../../5-Features/DialActions";
import s from "./index.module.scss";

const DialW = () => {
  return (
    <div className={s.dial}>
      <DialActions parent={(actions) => <Dial>{actions}</Dial>} />
    </div>
  );
};

export default DialW;
