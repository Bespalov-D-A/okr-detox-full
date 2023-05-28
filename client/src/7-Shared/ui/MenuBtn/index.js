import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

const BurgerBtn = (props) => {
  const { callback, style, icoStyle } = props;
  return (
    <IconButton
      style={style}
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      onClick={callback}
    >
      <MenuIcon style={icoStyle} />
    </IconButton>
  );
};

export default BurgerBtn;
