import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import s from "./index.module.scss";

const Bar = ({ children }) => {
  return (
    <AppBar position="fixed">
      <Container className={s.wrap} maxWidth="xl">
        <Toolbar>{children}</Toolbar>
      </Container>
    </AppBar>
  );
};

export default Bar;
