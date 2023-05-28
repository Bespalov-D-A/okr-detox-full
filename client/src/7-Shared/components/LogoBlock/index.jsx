import Logo from "./../../assests/img/tree.svg";
import Typography from "@mui/material/Typography";
import s from "./index.module.scss";
import { ReactSVG } from "react-svg";

const LogoBlock = (props) => {
  const { style, imgStyle, fontStyle } = props;
  return (
    <div className={s.wrap} style={style}>
      <ReactSVG src={Logo} className={s.logo} style={imgStyle} />
      <Typography
        className={s.title}
        variant="h4"
        component="h4"
        style={fontStyle}
      >
        okr-detox
      </Typography>
    </div>
  );
};

export default LogoBlock;
