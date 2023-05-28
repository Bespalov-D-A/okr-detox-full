import { useCommon } from "../../../6-Entities/common";
import BurgerBtn from "../../../7-Shared/ui/MenuBtn";

const BurgerBtnComp = () => {
  const setIsOpenMenu = useCommon((state) => state.setIsOpenMenu);
  const isOpenMenu = useCommon((state) => state.isOpenMenu);

  return (
    <BurgerBtn
      style={{ padding: 12 }}
      icoStyle={{ fontSize: 40 }}
      callback={() => setIsOpenMenu(!isOpenMenu)}
    />
  );
};

export default BurgerBtnComp;
