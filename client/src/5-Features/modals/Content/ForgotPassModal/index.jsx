import s from "./index.module.scss";

const ForgotPassModalContent = ({ forgotPassForm, captchaFunc, children }) => {
  return (
    <div id="forgot-modal-content" className={s.content}>
      <div className={s["form-wrap"]}>
        {forgotPassForm(captchaFunc, children)}
      </div>
    </div>
  );
};

export default ForgotPassModalContent;
