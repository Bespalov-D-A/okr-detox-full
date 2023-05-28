import { useEffect, useRef, useState } from "react";
import { useCommon } from "../../6-Entities/common";
import ReCaptcha from "../../7-Shared/lib/ReCAPTCHA";
import SkeletonComp from "../../7-Shared/lib/Skeleton";
import s from "./index.module.scss";

const Captcha = ({ innerRef }) => {
  //Делаем кнопку в форме где находится капча активной/не активной при нажатии или снятии флажка с капчи
  const formBtnDisabled = useCommon((state) => state.formBtnDisabled);
  const setFormBtnDisabled = useCommon((state) => state.setFormBtnDisabled);
  const [isLoad, setIsLoad] = useState(false);

  useEffect(() => {
    const fakeLoad = setTimeout(() => setIsLoad(true), 1000);
    return () => clearTimeout(fakeLoad);
  }, []);

  return (
    <div className={s.captcha}>
      <SkeletonComp componentIsReady={isLoad}>
        <ReCaptcha
          innerRef={innerRef}
          handleChange={() => setFormBtnDisabled(!formBtnDisabled)}
        />
      </SkeletonComp>
    </div>
  );
};

export default Captcha;
