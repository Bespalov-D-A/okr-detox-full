import { useAlert } from "../../../6-Entities/common";
import AlertUI from "../../../7-Shared/ui/Alert";

const Alert = () => {
  const type = useAlert((state) => state.type);
  const setType = useAlert((state) => state.setType);
  const msg = useAlert((state) => state.message);
  const setMsg = useAlert((state) => state.setMessage);

  const onClose = () => {
    setType(null);
    setMsg(null);
  };

  return <AlertUI onClose={onClose} type={type} content={() => msg} />;
};

export default Alert;
