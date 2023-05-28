import CircularProgress from "@mui/material/CircularProgress";
import s from "./index.module.scss";

const CanvasPreloader = ({ isLoad }) => {
  return (
    <>
      {isLoad && (
        <div className={s.canvas}>
          <CircularProgress className={s.spinner} disableShrink />
        </div>
      )}
    </>
  );
};

export default CanvasPreloader;
