import Drawer from "@mui/material/Drawer";
import { useEffect, useState } from "react";
import { useCommon } from "../../../6-Entities/common";
import CustomScrollBar from "../../../7-Shared/ui/CustomScrollBar";
import s from "./index.module.scss";

const Menu = ({ children, ExitBtn, ProfileBlock }) => {
  const isOpenMenu = useCommon((state) => state.isOpenMenu);
  const setIsOpenMenu = useCommon((state) => state.setIsOpenMenu);

  const handleClose = () => {
    setIsOpenMenu(false);
  };

  return (
    <Drawer open={isOpenMenu} onClose={handleClose}>
      <div className={s.menu}>
        {ProfileBlock()}
        <div className={s.wrap}>{children}</div>
        <div className={s.exit}>{ExitBtn()}</div>
      </div>
    </Drawer>
  );
};

export default Menu;
