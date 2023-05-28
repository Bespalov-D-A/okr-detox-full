import Captcha from "../../5-Features/Captcha";
import ForgotPassForm from "../../5-Features/forms/ForgotPassForm";
import ForgotPassModalContent from "../../5-Features/modals/Content/ForgotPassModal";
import ForgotPassModal from "../../5-Features/modals/ForgotPasModal";

const ForgotModalW = () => {
  const modalContent = () => (
    <ForgotPassModalContent
      forgotPassForm={(captchaFunc, children) => (
        <ForgotPassForm children={children} captchaFunc={captchaFunc} />
      )}
      captchaFunc={(innerRef) => <Captcha innerRef={innerRef} />}
    ></ForgotPassModalContent>
  );

  return <ForgotPassModal component={modalContent} />;
};

export default ForgotModalW;
