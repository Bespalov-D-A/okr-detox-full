import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import "./index.scss";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import Backdrop from "@mui/material/Backdrop";
import { useState } from "react";
import Container from "@mui/system/Container";

const Dial = ({ children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleAction = (action) => {
    setOpen(false);
    action();
  };

  return (
    <>
      <Backdrop onClick={handleClose} open={open} />

      <Container style={{ padding: 0 }} maxWidth="xl">
        <Box sx={{ height: 320, transform: "translateZ(0px)", flexGrow: 1 }}>
          <SpeedDial
            ariaLabel="SpeedDial basic example"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon color="secondary" />}
            onClose={handleClose}
            onOpen={handleOpen}
            open={open}
          >
            {children.map((action) => (
              <SpeedDialAction
                key={action.name}
                icon={action.icon}
                tooltipTitle={action.name}
                tooltipOpen
                onClick={() => handleAction(action.action)}
              />
            ))}
          </SpeedDial>
        </Box>
      </Container>
    </>
  );
};

export default Dial;
